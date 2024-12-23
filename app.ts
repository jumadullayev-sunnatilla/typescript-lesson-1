// 1 - masala
console.log("1-masala");
{
  function eventSum(a: number): number {
    let b: number = 0;
    for (let index = 0; index <= a; index++) {
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
  function bool(a: boolean): number {
    if (a) {
      return 1;
    } else {
      return 0;
    }
  }

  console.log(bool(true));
}
// 3- masala
console.log("3-masala");
{
  function returnTwo(name: string): string {
    return name.split("").slice(0, 2).join("");
  }
  console.log(returnTwo("laylo"));
}
// 4 - masala
console.log("4-masala");
{
  function integerNumber(n: number): number {
    return Math.floor(n + 2);
  }
  console.log(integerNumber(0.4));
}
// 5 - masala
console.log("5-masala");
{
  function intToStr(n: number): string {
    return (n + 1).toString();
  }
  console.log(intToStr(5));
}
// 6- masala
console.log("6-masala");
{
  function str(n: string): void {
    n.split("").forEach((i) => console.log(i));
  }
  console.log(str("qwert"));
}
// 7- masala
console.log("7-masala");
{
  function teskarSon(n: number): number[] {
    const result: number[] = [];
    for (let i = n; i >= -n; i--) {
      result.push(i);
    }
    return result;
  }
  console.log(teskarSon(4));
}
// 8- masala
console.log("8-masala");
{
  function boolNumber(n: number): string | boolean {
    if (n === 1) {
      return true;
    } else if (n === 0) {
      return false;
    } else {
      return "1 yoki 0 sonini kirit";
    }
  }
  console.log(boolNumber(0));
}
// 9- masala
console.log("9-masala");
{
  function asdf(name: string, nationality: string) {
    return `My name is ${name}. I'm ${nationality}`;
  }
  console.log(asdf("Sunnat", "uzbek"));
}
