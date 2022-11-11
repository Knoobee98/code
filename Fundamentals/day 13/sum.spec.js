const {sum, validate} = require("./sum.js");
// const {BuzzFizz, JumlahDeret} = require("./fizzbuzz.js");

test("testing sum function", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 5)).toBe(10);
    expect(sum(5, -1)).toBe(4);
});

test("testing validate function", () => {
    expect(validate("fdhuha@gmail.com")).toBe(true);
    expect(validate("fdhuha")).toBe(false);
    expect(validate("fdhuhagmail.com")).toBe(false);
});

// test("fizzBuzz testing", () => {
//     expect(BuzzFizz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
//     expect(BuzzFizz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
//     expect(BuzzFizz(0)).toEqual([]);
// });

// test("Jumlah Deret testing", () => {
//     expect(JumlahDeret(15)).toEqual(60);
//     expect(JumlahDeret(5)).toEqual(8);
//     expect(JumlahDeret(0)).toEqual(0);
// });