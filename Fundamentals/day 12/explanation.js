function validation(email, cb){
    email = email.toString();
    if(email.includes("@")){
        return true;
    } else {
        return false;
    }
}
function result(emailFromValidation){
    return emailFromValidation;
}

console.log(validation("fdhuha@gmail.com", result));

let Validation = (email, cb) => {
    email = email.toString();
    if(email.includes("@")){
        return cb(true);
    } else {
        return cb(false);
    }
}

// let result = (emailFromValidation) => {
//     return emailFromValidation.toString();
// }

validation("fdhuha@gmail.com", (emailFromValidation) => {
    return emailFromValidation;
});