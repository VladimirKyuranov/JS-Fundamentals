function isPalindrome(word) {

    let palindrome = true;

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1- i])
        palindrome = false;
    }

    return palindrome;
}

console.log(isPalindrome("haha"));
console.log(isPalindrome("racecar"));