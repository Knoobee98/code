//#1
// function MaksMinAvrg(arr){
//     var result;
//     max = Math.max(...arr);
//     min = Math.min(...arr);
//     sum = arr.reduce((a, b) => a + b, 0);
//     avg = sum / arr.length;
//     result = `The minimum is ${min}, the maximum is ${max}, the average is ${avg}`;
//     console.log(result);
// }

function minmaxAvg(arr){
    //min, max, average using loop
    // var arr = [1, 2, 3, 4, 5, 6,];
    // check array for max value using loop
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(`max : ${max}`);

    //check array for min value using loop
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`Min : ${min}`);

    //check array for average value using loop
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(`Average : ${avg}`);

    // console.log(`Max : ${max}, Min : ${min}, Average : ${avg}`);
    }
    
//#2
function Words(arr){
    //define variable
    var sentence;
    sentence = arr.join(" and ").toString();
    console.log(sentence);
}

//#3
function wordToArr(str){
    var arr;
    arr = str.split(" ");
    console.log(arr);
}

//#4
function penjumlahanArray(arr1,arr2){
    var result;
    var num = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(i === j){
                result =+ arr1[i] + arr2[j];
                num.push(result);
            }
        }
    }
    console.log(num);
}

//#5
function addElements(){
    var arr = [1, 3, 5, 6, 7];

    //if input !== array[i] then push elements to array
    for(let i = 0; i < arguments.length; i++){
        if(!arr.includes(arguments[i])){
            arr.push(arguments[i]);
        }
    }
    console.log(arr);
}

//#6
function oddArray(arr){
    var oddArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddArr.push(arr[i]);
        }
    }
    console.log(oddArr);
}

// MaksMinAvrg([1, 3, 5, 10, 2]);
minmaxAvg([5, 10, 20, -1]);
Words(["Hai", "Purwadhika", "ini", "adalah", "bot"]);
wordToArr("selamat datang di purwadhika");
penjumlahanArray([1, 0, 2, 4], [3, 5, 6, 7]);
addElements(1, 2, 3, 4);
addElements("test", 5, 6, 7);
oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

