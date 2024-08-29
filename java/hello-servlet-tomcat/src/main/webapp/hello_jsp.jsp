<%@ page import="java.time.*" %>
    <html>

    <head>
        <title>Hello World - JSP</title>
    </head>

    <body>
        <%-- JSP Comment --%>
            <h1>Hello World!</h1>
            <p>
                <% out.println("Your IP address is ");
    %>
    <span style=" color:red">
                    <%= request.getRemoteAddr() %>
                        </span>
            </p>
            <p>
                <% Instant now=Instant.now(); out.println(now.atZone(ZoneId.systemDefault())); %>
            </p>
    </body>

    </html>