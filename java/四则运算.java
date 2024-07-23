import java.util.*;

public class 四则运算 {

    public static void main(String[] args) throws Exception {
        String exp = "x + 2 * (y - 5)";
        SuffixExpression se = compile(exp);
        Map<String, Integer> env = Map.of("x", 1, "y", 9);
        int result = se.execute(env);
        System.out.println(exp + " = " + result + " " + (result == 1 + 2 * (9 - 5) ? "✓" : "✗"));
    }

    static SuffixExpression compile(String exp) {
        return new SuffixExpression(exp);
    }
}

class SuffixExpression {
    String exp;
    Deque<String> res;

    SuffixExpression(String exp) {
        this.exp = exp;

        Deque<String> res = new LinkedList<>();
        Deque<String> op = new LinkedList<>();

        for (int i = 0; i < exp.length(); i++) {
            String ch = String.valueOf(exp.charAt(i));
            if (" ".equals(ch)) {
            } else if (isDigit(ch)) {
                StringBuilder num = new StringBuilder();
                while (i < exp.length() && isDigit(String.valueOf(exp.charAt(i)))) {
                    num.append(exp.charAt(i));
                    i++;
                }
                i--;
                res.push(num.toString());
            } else if (isLeft(ch) || op.isEmpty() || isLeft(op.peek())) {
                op.push(String.valueOf(ch));
            } else if (isRight(ch)) {
                while (!op.isEmpty() && !isLeft(op.peek())) {
                    res.push(op.pop());
                }
                op.pop();
            } else {
                if (!higher(ch, op.peek())) {
                    while (!op.isEmpty() && !higher(ch, op.peek()) && !isLeft(op.peek())) {
                        res.push(op.pop());
                    }
                }
                op.push(ch);
            }
        }
        while (!op.isEmpty()) {
            res.push(op.pop());
        }
        this.res = res;
    }

    boolean isLeft(String ch) {
        return "(".equals(ch);
    }

    boolean isRight(String ch) {
        return ")".equals(ch);
    }

    boolean isDigit(String ch) {
        return !isLeft(ch) && !isRight(ch) && "+-*/ ".indexOf(ch) == -1;
    }

    boolean higher(String c1, String c2) {
        return ("*/".contains(c1)) && ("+-".contains(c2));
    }

    int execute(Map<String, Integer> env) {
        System.out.printf("exe:%s:::\n", Arrays.toString(this.res.toArray()));
        String[] re = new String[this.res.size()];
        int i = this.res.size() - 1;
        while (!this.res.isEmpty()) {
            re[i--] = this.res.pop();
        }

        Deque<String> stack = new LinkedList<>();
        for (String s : re) {
            System.out.println(s);
            switch (s) {
                case "+" -> {
                    String a = stack.pop();
                    String b = stack.pop();
                    Integer m = getValue(env, a);
                    Integer n = getValue(env, b);
                    stack.push(String.valueOf(m + n));
                }
                case "-" -> {
                    String a = stack.pop();
                    String b = stack.pop();
                    Integer m = getValue(env, a);
                    Integer n = getValue(env, b);
                    stack.push(String.valueOf(n - m));
                }
                case "*" -> {
                    String a = stack.pop();
                    String b = stack.pop();
                    Integer m = getValue(env, a);
                    Integer n = getValue(env, b);
                    stack.push(String.valueOf(m * n));
                }
                case "/" -> {
                    String a = stack.pop();
                    String b = stack.pop();
                    Integer m = getValue(env, a);
                    Integer n = getValue(env, b);
                    stack.push(String.valueOf(n / m));
                }

                default -> {
                    stack.push(s);
                }
            }

            System.out.println(Arrays.toString(stack.toArray()));
        }
        return Integer.parseInt(stack.pop());
    }

    int getValue(Map<String, Integer> env, String a) {
        Integer m;
        if (env.containsKey(a)) {
            m = env.get(a);
        } else {
            m = Integer.parseInt(a);
        }
        return m;
    }
}
