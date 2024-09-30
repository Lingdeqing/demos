import java.io.*;
import java.lang.reflect.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.time.temporal.TemporalField;
import java.util.*;
import java.util.concurrent.Callable;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.Future;
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.function.LongSupplier;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.Stream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

@FunctionalInterface
interface TestLamda {
    int inc(int a, int b);

    default long inc2(long a, long b) {
        return a - b;
    }

    long inc3(long b);

    boolean equals(Object o);
}

public class 输入输出 {

    static final Object LOCK_A = new Object();
    static final Object LOCK_B = new Object();

    public static void main(String[] args) throws Exception {
        Stream<Integer> fib = Stream.generate(new NatualSupplier());
        // 打印Fibonacci数列：1，1，2，3，5，8，13，21...
        System.out.println(Arrays.toString(fib.limit(10).toArray(Integer[]::new)));

        // TestLamda testLamda = (a, b) -> a + b;
        // System.out.println(testLamda.inc(1, 2));

    }

    static class NatualSupplier implements Supplier<Integer> {
        int n = 0;

        @Override
        public Integer get() {
            n++;
            return n;
        }

    }

}

class FibSupplier implements LongSupplier {
    int a = 0;
    int b = 1;

    public long getAsLong() {
        int c = a + b;
        a = b;
        b = c;
        return a;
    }
}
