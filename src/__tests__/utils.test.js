// Your tests here
import isPalindrome from "../utils";

describe("isPalindrome", () => {
    it("Returns true for a palindrome word", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    it("Returns false for any other word", () => {
        expect(isPalindrome("car")).toBe(false);
    });
    it("Returns true for a palindrome word with mixed case", () => {
        expect(isPalindrome("Racecar")).toBe(true);
    });
    it("Returns false for an empty string", () => {
        expect(isPalindrome("")).toBe(false);
    });
    it("Throws an error for input with non-alphabetic", () => {
        expect(() => {isPalindrome("12321");}).toThrow();
    });
});