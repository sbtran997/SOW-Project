public class StringValidator {
    public static boolean isValid(String input, int maxLength) {
        // Validates that the string is not null, not empty, does not go over maxLength, and contains only letters and numbers.
        if (input == null) {
            return false;
        }
        if (input.length() == 0) {
            return false;
        }
        if (input.length() > maxLength) {
            return false;
        }
        // Check for alphanumeric characters and common punctuation
        return input.matches("[A-Za-z0-9 .,!?\"'()\\-\\n\\r]+");
    }
}
