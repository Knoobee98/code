const {BuzzFizz, JumlahDeret,split} = require('./fizzbuzz');

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

test("Split testing", () => {
    expect(split("hello world")).toEqual(expect.arrayContaining(["hello", "world"]));
    expect(split("hello world how are you")).toEqual(expect.arrayContaining(["hello", "world", "how", "are", "you"]));
    expect(split("hello")).toEqual(expect.arrayContaining(["hello"]));
    expect(split("")).toEqual(expect.arrayContaining([]));
});