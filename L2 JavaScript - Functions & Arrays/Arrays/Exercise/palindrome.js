var str = "OYO";

function strPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(str.length)) {
            return "Not a Palindrome";
        } else {
            continue;
        }
    }
    return "It is a palindrome";
}

var ans = strPalindrome(str);
console.log(ans);