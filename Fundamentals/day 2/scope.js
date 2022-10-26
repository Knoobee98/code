//let dan const
//variabel yang di declare di outside scope, dapat diakses di inside scope
//variaber yang di declare di inside scope hanya bisa diakses di dalam function

let number = 100; //global scope
{
    let number = 10
    {
        console.log(number); //10
    }
}