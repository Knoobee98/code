//replace vowels with 1 and non vovels including non alpha characters with 0

//define function
function vowelOne(s){
    //define result variable
    let result = '';
    //define vowels
    let vowels = 'aeiouAEIOU';
    //loopp through each character in string s and replace vowels with 1 and non vovels including non alpha characters with 0
    for(let i = 0; i < s.length; i++){
      if(vowels.indexOf(s[i]) >= 0){
        result += 1;
      } else {
        result += 0;
      }
    }
    //return result
    return result;
  }
//print result
console.log(vowelOne("vowelOne"));
console.log(vowelOne("123, arou"));