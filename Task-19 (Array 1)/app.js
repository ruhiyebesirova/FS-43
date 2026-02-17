//Task 1
const users = ["Səidə","Narin","Günel"];
users.push("Mətanət");
users.shift()

console.log(users);

//Task 2
const names = ["Kənan","Nicat","Əvəz"];
names[1] = "Classified";

console.log(names);

//Task 3
//?

//Task 4
const add = ["New Hope","The Empire Strikes Back","Return of the Jdi"];

console.log("Episod 4:",add[0]);
console.log("Episod 5:",add[1]);
console.log("Episod 6:",add[2]);

//Task 5
const number = prompt("Vergüllə ayrılmış beş ədəd daxil edin.(x,x,x,x,x)");

let add1 = number.split(",").map(Number);
let min = Math.min(...add1);
console.log(min);

//Task 6
const text = "32,31,34,36,31";
let replace = text.split(",").join(";");
console.log(replace);

//Task 7
const eded = ["1","2","3","4","5","6","7","8","9","10"];
for (let i = 0; i < eded.length; i++) {
    if (eded[i] % 2 === 0){
        console.log(eded[i]);
    }
}

//Task 8
const name1 = ["Elif","Ramal"];
const age = [17,18];

const nameAge = name1.concat(age);
console.log(nameAge);

//Task 9
const num = [10,5,3,2];
let max = Math.max(...num);
let min1 = Math.min(...num);
const ferq = max-min1;

console.log(ferq);

//Task 10
//?

//Task 11
const input = [3,-1,5,-7,2];
input[1] = 0;
input[3] = 0;
console.log(input);

//Task 12
//?
