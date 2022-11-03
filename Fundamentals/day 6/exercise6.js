//exercise 6
function DOB(date){
    let dob = new Date(date);
    let now = new Date();

    let dobToMs = dob.getTime();
    let nowToMs = now.getTime();
    let msPerDay = 1000 * 60 * 60 * 24 * 365;

    let dobInYear = dobToMs / msPerDay;
    let nowInYear = nowToMs / msPerDay;
    // console.log(dobInYear);
    // console.log(nowInYear);
    // console.log(nowInYear - dobInYear);
    return Math.floor(nowInYear - dobInYear);
}

let students = [
    { 
    name: 'Tito',
    email: "Tito@gmail.com",
    date: "1995-08-05",
    getDob(){
        return DOB(this.date);
    },
    score: 100,},
    { 
    name: 'Stephen',
    email: "Stephen@gmail.com",
    date:"2010-09-06",
    getDob(){
        return DOB(this.date);
    },
    score: 99,},
    {
    name: 'Gilang',
    email: "Gilang@gmail.com",
    date:"1997-10-10",
    getDob(){
        return DOB(this.date);
    },
    score: 101,},
]

function calculateStudent(arr){
    let score = [];
    let age = [];
    for(let i = 0; i < arr.length; i++){
        score.push(arr[i].score);
    }
    let scoreMin = Math.min(...score);
    let scoreMax = Math.max(...score);
    let scoreAvg = score.reduce((a,b) => a + b, 0) / score.length;
    // console.log(`score min: ${scoreMin}, score max: ${scoreMax}, score avg: ${scoreAvg}`);
    res = {
        score : "Score",
        scoremin: scoreMin,
        scoremax: scoreMax,
        scoreavg: scoreAvg,
    }
    return res;

}

function calculateAge(arr){
    let age = [];
    let display = [];
    for(let i = 0; i < arr.length; i++){
        let AgeinMiliseconds = new Date() - new Date(arr[i].date);
        age = Math.floor(AgeinMiliseconds/1000/60/60/24/365);
        display.push(age);
    }
    return display;

    
    console.log(display);
    let ageMin = Math.min(...display);
    let ageMax = Math.max(...display);
    let ageAvg = display.reduce((a, b) => a + b, 0) / display.length;
    console.log(`Age min: ${ageMin}, Age Max: ${ageMax}, Age Avg: ${ageAvg}`);
    res = {
        age : "Age",
        agemin: ageMin,
        agemax: ageMax,
        ageavg: ageAvg,
    }
    return res;
}

function age(arr){
    let age = [];
    
    for(let i = 0; i < arr.length; i++){
        age.push(arr[i].getDob());
    }
    let ageMin = Math.min(...age);
    let ageMax = Math.max(...age);
    let ageAvg = age.reduce((a, b) => a + b, 0) / age.length;
    // console.log(`Age min: ${ageMin}, Age Max: ${ageMax}, Age Avg: ${ageAvg}`);
}


console.log(students);
function ageRestriction(arr){
    let newData = [];
    for(var i=0; i < arr.length; i++) {
        if(arr[i].getDob() >= 17){
            newData.push(arr[i]);
        }
    }
    return newData;
    
    }
    
// console.log(students);
console.log(calculateStudent(students));
// calculateAge(students);
console.log(ageRestriction(students));
// console.log(ageRestriction(students));
