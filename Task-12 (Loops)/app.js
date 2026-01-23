
//Task 1
let eded = +prompt("İki rəqəmli ədəd daxil edin");
let result = 0;

for (let i = eded; i < 100; i += 7) {
    result = i;
}
console.log(result);

//Task 2
let n = +prompt("Ədəd daxil edin")

for (let i = 0; i < n; i++) {
   console.log("I know how to use cycles");
}

//Task 3
for (let i = 100; i < 999; i+=10) {
console.log(i);
}

//Task 4
let result1 = 0;

for (let i = 11; i <= 99; i+=2) {
    result1 += i;
}
console.log(result1);

//Task 5
let num = +prompt("Ədəd daxil edin");
let result2 = 0;

for (let i = 111; i <= 999; i++) {
     if (i % num === 0) {
        result2 += i;
    }   
}
console.log(result2);

//Task 6
//?

//Task 7
let numm = 1;

for (let i = 1; i < 10; i++) {
numm * i;
}
console.log(numm);

//Task 8,9,10
//keçməmişiy

//Task 11
let res = 0;

for (let i = 1; i <= 99; i+=2) {
    res += i;
}
console.log(res);

//Task 12
//keçməmişiy

//Task 13
let number = +prompt("Ədəd daxil edin");
let factorial = 1;

for (let i = 1; i <= number; i++) {
factorial *= i;
}
console.log(factorial);