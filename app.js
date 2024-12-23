// 1 - masala
console.log("1-masala");
{
    function eventSum(a) {
        var b = 0;
        for (var index = 0; index <= a; index++) {
            if (index % 2 === 0) {
                b += index;
            }
        }
        return b;
    }
    console.log(eventSum(7));
}
// 2 - masala
console.log("2-masala");
{
    function bool(a) {
        if (a) {
            return 1;
        }
        else {
            return 0;
        }
    }
    console.log(bool(true));
}
// 3- masala
console.log("3-masala");
{
    function returnTwo(name) {
        return name.split("").slice(0, 2).join("");
    }
    console.log(returnTwo("laylo"));
}
// 4 - masala
console.log("4-masala");
{
    function integerNumber(n) {
        return Math.floor(n + 2);
    }
    console.log(integerNumber(0.4));
}
// 5 - masala
console.log("5-masala");
{
    function intToStr(n) {
        return (n + 1).toString();
    }
    console.log(intToStr(5));
}
// 6- masala
console.log("6-masala");
{
    function str(n) {
        n.split("").forEach(function (i) { return console.log(i); });
    }
    console.log(str("qwert"));
}
// 7- masala
console.log("7-masala");
{
    function teskarSon(n) {
        var result = [];
        for (var i = n; i >= -n; i--) {
            result.push(i);
        }
        return result;
    }
    console.log(teskarSon(4));
}
// 8- masala
console.log("8-masala");
{
    function boolNumber(n) {
        if (n === 1) {
            return true;
        }
        else if (n === 0) {
            return false;
        }
        else {
            return "1 yoki 0 sonini kirit";
        }
    }
    console.log(boolNumber(0));
}
// 9- masala
console.log("9-masala");
{
    function asdf(name, nationality) {
        return "My name is ".concat(name, ". I'm ").concat(nationality);
    }
    console.log(asdf("Sunnat", "uzbek"));
}
