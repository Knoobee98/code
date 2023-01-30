//parallelogram pattern

// 1. Buatlah sebuah function yang menerima dua parameter yaitu panjang dan tinggi
// 2. Buatlah sebuah pola jajargenjang dengan menggunakan parameter yang diberikan
// 3. Jika panjang dan tinggi tidak diisi, maka akan mengembalikan nilai "Parameter tidak boleh kosong"
// 4. Jika panjang dan tinggi diisi, maka akan mengembalikan nilai pola jajargenjang


function jajargenjang(p, t){
    let result = '';
    for(let i = t; i > 0; i--){ //looping tinggi jajargenjang
        for(let j = 1; j <= i; j++){ 
            result += " ";
        }
        for(let j = 1; j <= p; j++){ //looping panjang
            result += "*"
        }
        result += "\n"
    }
    console.log(result)
}

jajargenjang(10, 5);