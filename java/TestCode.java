import java.util.Arrays;
import java.util.List;

public class TestCode {
    public static int solution(int[] numbers) {
        System.out.println(Arrays.toString(numbers));
        return backtrack(0, 0, 0, numbers);
    }

    static int backtrack(int total, int sum, int start, int[] numbers) {
        if (start >= numbers.length) {
            if (sum % 2 == 0) {
                return total + 1;
            }
            return total;
        }
        int n = numbers[start];
        while (n != 0) {
            System.out.println(n);
            int cur = n % 10;
            total = backtrack(total, start + cur, start + 1, numbers);
            n = n / 10;
        }
        return total;
    }

    public static void main(String[] args) {
        // You can add more test cases here
        System.out.println(solution(new int[] { 123, 456, 789 }) == 14);
        // System.out.println(solution(new int[] { 123456789 }) == 4);
        // System.out.println(solution(new int[] { 14329, 7568 }) == 10);
    }
}