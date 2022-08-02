
function reverseWords(str) {
    var words = "";
    for (var i=str.length - 1; i >= 0; i--) {
        words += str[i];
    }
    return words;
}

console.log(reverseWords("I am A Great human"));