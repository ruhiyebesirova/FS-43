//Task 1
function Dna(dna) {
    let result = "";

    for (let char of dna) {
        if (char === "T") result += "B";
        else if (char === "N") result += "K";
        else if (char === "P") result += "I";
        else if (char === "R") result += "A";
    }
    return result;
}
console.log(Dna("TRNP"));

//Task 2
function words(metn,simvol) {

    if (!metn || !simvol){
      return "";
   }

     return simvol.repeat(metn.length);
}
console.log(words("ana", "5"));

//Task 3
//?

//Task 4
function nida(text) {
    let deletes = text.split('!').join('');
    return deletes + "!";
}
console.log(nida("!!!sala!m!"));

//Task 5
//?

//Task 6
function code(a) {
    let result = "";
    for (let i = 0; i < a; i++){
        if(i % 2 === 0){
            result += "1";
        }else {
            result += "0";
        }
    }
    return result;
}
console.log(code(13));
console.log(code(5));



