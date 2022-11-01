//exercise 6
let students = [
    { 
    name: 'Tito',
    email: "Tito@gmail.com",
    date: "1995-08-05",
    age: "",
    score: 100,},
    { 
    name: 'Stephen',
    email: "Stephen@gmail.com",
    date:"1996-09-06",
    age: "",
    score: 99,},
    {
    name: 'Gilang',
    email: "Gilang@gmail.com",
    date:"1997-10-10",
    age: "",
    score: 101,},
]

function calculateStudent(arr){
    let score = [];
    for(let i = 0; 1 < arr.length; i++){
        score.push(arr[i].score);
    }
    let scoreMin = Math.min(...score);
    let scoreMax = Math.max(...score);
    let scoreAvg = score.reduce((a,b) => a + b, 0) / score.length;
    console.log(`score min: ${scoreMin}, score max: ${scoreMax}, score avg: ${scoreAvg}`);
}
calculateStudent(students);