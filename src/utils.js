function isPalindrome(word) {
    // Check if the input is a string
    if (typeof word !== 'string') {
        throw new Error("Input must be a string");
    }

    // Check if the input is empty
    if (word === '') {
        return false; // Empty string is not a palindrome
    }

    // Check if the word contains only alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error("Input must contain only alphabetic characters");
    }
    
    // Convert the string to lowercase to make it case-insensitive
    const lowercaseStr = word.toLowerCase();

    // Remove non-alphabetic characters using regular expression
    const alphanumericStr = lowercaseStr.replace(/[^a-z]/g, '');

    // Compare the string with its reverse to determine if it's a palindrome
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

export default isPalindrome;


