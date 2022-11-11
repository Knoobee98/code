const {BuzzFizz, JumlahDeret} = require('./fizzbuzz');

test("fizzBuzz testing", () => {
    expect(BuzzFizz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    expect(BuzzFizz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    expect(BuzzFizz(0)).toEqual([]);
});

test("Jumlah Deret testing", () => {
    expect(JumlahDeret(15)).toEqual(60);
    expect(JumlahDeret(5)).toEqual(8);
    expect(JumlahDeret(0)).toEqual(0);
});