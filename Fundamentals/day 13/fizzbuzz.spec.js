const {BuzzFizz, JumlahDeret} = require('./fizzbuzz');

test("fizzBuzz testing", () => {
    expect(BuzzFizz(15)).toEqual(expect.arrayContaining([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]));
    expect(BuzzFizz(5)).toEqual(expect.arrayContaining([1, 2, "Fizz", 4, "Buzz"]));
    expect(BuzzFizz(2)).toEqual(expect.arrayContaining([1, 2]));
    expect(BuzzFizz(1)).toEqual(expect.arrayContaining([1]));
    expect(BuzzFizz(0)).toEqual(expect.arrayContaining([]));
});

test("Jumlah Deret testing", () => {
    expect(JumlahDeret(15)).toEqual(60);
    expect(JumlahDeret(5)).toEqual(8);
    expect(JumlahDeret(0)).toEqual(0);
});