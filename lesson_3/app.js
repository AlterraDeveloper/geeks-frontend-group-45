// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. object
// 7. bigint
// 8. symbol

let myName = "Kiselev Eugene Dmitrievich";
console.log("my name:", myName);
myName = 5;
console.log("my name:", myName);
myName = true;
console.log("my name:", myName);

let myBirthdate = "01.01.2001";
myBirthdate = null;

let client = {
    surname: "Kiselev",
    name: "Eugene",
    middlename: "Dmitrievich",
};

let mbankName = client.name + " " + client.surname.at(0) + ".";
console.log("Mbank:", mbankName);

let myShortName = client.surname[0] + "." + client.name[0] + "." +
    client.middlename[0];
console.log("my short name:", myShortName);

// concatenation

// + - * / % **
// += -= ...

let wallet = 500;

// wallet = wallet + 1000;
wallet += 1000;
wallet -= 300;
wallet *= 2;
wallet /= 2;

console.log("my balance:", wallet);

// > < >= <= == === != !==

// arrays - массивы

let users = ["alexma", "justin_1998_test", "albert0700", "ro_ro"];
// indexing:            0              1                2           3
console.log("My followings:", users.length);

// loops - циклы

// for..of
for (let user of users) {
    console.log("@" + user);
}

// console.log("@" + users[0]);
// console.log("@" + users[1]);
// console.log("@" + users[2]);
// console.log("@" + users[3]);

let operations = [+10_000, -1000, -500, +2_000, -4500];
let doxod = 0;
let rasxod = 0;

for (let operation of operations) {
    if (operation > 0) {
        doxod += operation;
    } else {
        rasxod += Math.abs(operation);
    }
}

console.log("Doxod:", doxod);
console.log("Rasxod:", rasxod);


// for(;;) - infinity loop

let cars = ["01KG123RTE", "04KG123ADO", "05KG123MVD"];

// 01KG123RTE -> Bishkek

for (let car of cars) {
    let carCode = car.slice(0, 2);
    switch (carCode) {
        case "01":
            console.log(carCode + " = Bishkek");
            break;
        case "02":
            console.log(carCode + " = Osh");
            break;
        case "03":
            console.log(carCode + " = Batken");
            break;
        case "04":
            console.log(carCode + " = Jalal-abad");
            break;
        case "05":
            console.log(carCode + " = Naryn");
            break;
        default:
            console.log("invalid code")
            break;
    }
}



