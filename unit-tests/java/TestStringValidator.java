public class TestStringValidator {
    // Passed and failed counters
    private static int numPassed = 0;
    private static int numFailed = 0;

    // Helper function to check test results
    private static void check(String name, boolean actual, boolean expected) {
        if (actual == expected) {
            System.out.println(name + ": PASS");
            numPassed++;
        } else {
            System.out.println(name + ": FAIL (expected " + expected + ", got " + actual + ")");
            numFailed++;
        }
    }

    // Test cases for StringValidator
    public static void main(String[] args) {
        int maxLength = 10;

        check("Valid alphanumeric", StringValidator.isValid("SOW123", maxLength), true);
        check("Allow basic symbols", StringValidator.isValid("Hello!", maxLength), true);
        check("Reject uncommon symbols", StringValidator.isValid("<malcode>", maxLength), false);
        check("Reject too long", StringValidator.isValid("jdaklf;jslakfs", maxLength), false);
        check("Reject empty", StringValidator.isValid("", maxLength), false);
        check("Reject null", StringValidator.isValid(null, maxLength), false);

        System.out.println("\nSummary: " + numPassed + " passed, " + numFailed + " failed");
    }
}
