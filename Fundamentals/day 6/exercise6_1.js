let students = [
    { 
        name: 'Tito',
        email: "Tito@gmail.com",
        date: "1995-08-05",
        age: "",
        score: 100,
    },
    { 
        name: 'Stephen',
        email: "Stephen@gmail.com",
        date:"1996-09-06",
        age: "",
        score: 98,
    },
    {
        name: 'Gilang',
        email: "Gilang@gmail.com",
        date:"1997-10-10",
        age: "",
        score: 101,
    },
]

function calculateAge(arr){
    let age = [];
    for(let i = 0; i < arr.length; i++){
        let ageInMilisecond = new Date() - new Date(arr[i].age);
        age = Math.floor(ageInMilisecond/1000/60/60/24/365);
        console.log(age)
    }
    let ageMin = Math.min(...age);
    let ageMax = Math.max(...age);
    let ageAvg = age.reduce((a, b) => a + b, 0) / age.length;
    console.log(`Age min: ${ageMin}, Age Max: ${ageMax}, Age Avg: ${ageAvg}`);
}
calculateAge(students);