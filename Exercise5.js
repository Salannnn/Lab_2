var test = "test 1";
function countLetter(name) {
    return name.length;
}
console.log(countLetter(test));
function countNoSpace(name) {
    return name.replace(" ", "").length;
}
console.log(countNoSpace(test));
function myFunction(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(myFunction(test));
console.log(myFunction(test, true));
