import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class HelloHttp {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(8989);
        System.out.println("start server");
        while (true) {
            Socket sock = server.accept();
            System.out.println("connected from " + sock.getRemoteSocketAddress());
            Thread t = new Thread(() -> {
                try (InputStream input = sock.getInputStream()) {
                    try (OutputStream output = sock.getOutputStream()) {
                        BufferedReader reader = new BufferedReader(
                                new InputStreamReader(input, StandardCharsets.UTF_8));
                        BufferedWriter writer = new BufferedWriter(
                                new OutputStreamWriter(output, StandardCharsets.UTF_8));

                        String first = reader.readLine();
                        boolean requestOk = first.contains("GET / HTTP/1.");

                        while (true) {
                            String header = reader.readLine();
                            if (header.isEmpty())
                                break;
                            System.out.println(header);
                        }

                        if (requestOk) {
                            String data = "<html><body><h1>Hello, world!</h1></body></html>";
                            writer.write("HTTP/1.0 200 OK\r\n");
                            writer.write("Connection: close\r\n");
                            writer.write("Content-Type: text/html\r\n");
                            writer.write("Content-Length: " + data.getBytes(StandardCharsets.UTF_8).length + "\r\n");
                            writer.write("\r\n");
                            writer.write(data); // body
                            writer.flush();
                        } else {
                            String data = "<html><body><h1>404 Not Found!</h1></body></html>";
                            writer.write("HTTP/1.0 404 Not Found\r\n");
                            writer.write("Connection: close\r\n");
                            writer.write("Content-Type: text/html\r\n");
                            writer.write("Content-Length: " + data.getBytes(StandardCharsets.UTF_8).length + "\r\n");
                            writer.write("\r\n");
                            writer.write(data); // body
                            writer.flush();
                        }

                    }
                } catch (Exception e) {
                } finally {
                    try {
                        sock.close();
                    } catch (Exception e) {
                    }
                    System.out.println("disconnected from " + sock.getRemoteSocketAddress());
                }
            });
            t.start();
        }
    }
}
