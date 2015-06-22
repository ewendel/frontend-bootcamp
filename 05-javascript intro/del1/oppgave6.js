// Complete the isPalindrome-function that should return true when the given string is a palindrome
// http://en.wikipedia.org/wiki/Palindrome

function isPalindrome (str) {
    return "";
}

test("isPalindrome", function() {
    ok(isPalindrome("anna") === true,
        'anna should return true');
    ok(isPalindrome('painnkaak') === false,
        'painkaak should return false');
    ok(isPalindrome('agnes i senga') === true,
        'agnes i senga should return true');
    ok(isPalindrome('best kurs ever') === false,
        'best kurs ever should return false');
});