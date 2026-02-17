//Task 1
const number = [58,60,97,4,26,45,13,91,57,82];
const maxs = Math.max(...number);
console.log("Massiv-",number);
console.log(maxs);

//Task 2
let employees = [
  ["Jaylee Macy", "marketing"],
  ["John Smith", "management"],
  ["Blossom Hartley", "design"],
  ["Austin Carpenter", "marketing"],
  ["Joan Knowles", "development"],
  ["Sally Nunez", "management"],
  ["Laurel Ward", "development"],
  ["Lark Simon", "marketing"],
  ["Jane Stone", "management"],
  ["Courtney Olson", "development"],
];
const development = employees.filter(employees => employees[1] === "development");
console.log(development);

//Task 3
//?

//Task 4
function negativenumbers(arr) {
    const negatives = arr.filter(num => num < 0);

    if (negatives.length > 0) {
        return negatives;
    } else {
        return "Massivdə mənfi ədəd tapılmadı";
    }
}
let array1 = [5,15,65,-9,2,7,-76];
let array2 = [19,27,64,38,54];

console.log(negativenumbers(array1));
console.log(negativenumbers(array2));

//Task 5
const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

function printWithDashes(ad) {
    console.log("------");
    console.log(ad);
    console.log("------");
}

function printWithHearts(ad) {
    console.log("<3" + ad + "<3");
}

function printWithIndex(ad,index) {
    console.log(index + ": " + ad);
}

console.log(printWithDashes);
names.forEach(printWithDashes);

console.log(printWithHearts);
names.forEach(printWithHearts);

console.log(printWithIndex);
names.forEach(printWithIndex);

//Task 6
function kebabcase(text){
    return text.replaceAll("-","_").toUpperCase();
}
console.log(kebabcase("first-user"));



