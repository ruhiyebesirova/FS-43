//Task 1
function text(onetext,twotext) {
    return onetext.endsWith(twotext);
}

console.log(text('beautiful','ful'));
console.log(text('beautiful','ti'));

//Task 2
//?

//Task 3
function texts (text,text1,letter) {
    let search = text.indexOf(letter);
    let search1 = text1.indexOf(letter);

    let hisse1 = text.slice(0,search);
    let hisse2 = text1.slice(search1);

    return hisse1 + hisse2;
}
console.log(texts("fast","cars","a"));

//Task 4
//function words(word1,word2) {
    
  //  let find = (word1.includes(word2));
    //let find1 = (word2.includes(word1));

//    return find + find1;
//}
//console.log(words("salam","dunya"));

//Task 5
 //?
  

