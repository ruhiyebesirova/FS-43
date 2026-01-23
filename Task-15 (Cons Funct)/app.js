//Task 1

const client = {
fullName: "Ruhiyə Bəşirova",
creditLimit: 6000,
balance: 3500,
percentOfMinPayment: 7,


getBalance: function() {
if (this.balance >= 0) {
    return `Balansiniz ${this.balance}`;
} else {
    return `Borcunuz ${Math.abs(this.balance)}`;
}
},

getMinPayment: function() {
if (this.balance < 0) {
    const borc = Math.abs(this.balance);
    const minPayment = (borc * this.percentOfMinPayment) / 100;
    return `minimum odenisiniz ${minPayment}`;
} else {
    return "Sizin borcunuz yoxdur";
}
},

withdraw: function (amount) {
const withdrawLimit = this.balance + this.creditLimit;

if (amount <= withdrawLimit) {
 this.balance -= amount;
    console.log(`${amount} manat mebleg cixildi`);
} else {
    console.log("emeliyyat ugursuzdur.kifayet qeder kredit limitiniz yoxdur");   
}
},

refill: function(amount) {
this.balance += amount;
console.log(`${amount} azn mebleg hesaba elave olundu`);
}
};

console.log(client.getBalance());
console.log(client.getMinPayment());
client.withdraw(1700);
client.refill(800);


//Task 2
const calculator = {
     memory: 0,

    sum: function (a,b) {
        return a + b;
    },
    reduction:  function (a,b) {
        return a - b;
    },
    factor: function (a,b) {
        return a * b;
    },
    division: function (a,b) {
        if (b === 0) {
            return "Sıfıra bölmək olmaz!";
        }
        return a / b;
    },

//saxlanması
    saveToMemory: function(value){
        this.memory = value;
        console.log(`Dəyər yadda saxlanıldı: ${this.memory}`);
    },
//təmizlənməsi
    cleanMemory: function () {
        this.memory = 0;
        console.log("Yaddaş təmizləndi");
    },
//ədəd əlavə etmək
    addToMemory: function(value) {
        this.memory += value;
        console.log(`Yaddaşa ${value} əlavə edildi.Yaddaşınız ${this.memory}`);
    },
//yaddaşdan dəyərin oxunması
    readMemory: function () {
    return `Yaddaşdakı dəyər: ${this.memory}`;
    },
};

console.log(calculator.sum(4,11));









