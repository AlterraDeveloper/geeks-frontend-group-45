/*
Есть массив с ИННами, например вот такой:
["21212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "11212201212345", "21212201212345"].
Посчитать статистику сколько в этом списке женщин, мужчин.
Первый символ ИНН на это указывает: 1 - женщина, 2 - мужчина.
В консоли вывести просто мужчин: Х, женщин Y.
По аналогии с доходами-расходами на уроке.
 */

let inns = ["21212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "11212201212345", "21212201212345"];

let menCount = 0;
let womenCount = 0;

for (let inn of inns) {
    // let first = Number(inn[0]);
    let first = inn[0];
    // if (first === 1) {
    //     womenCount++;
    // } else if (first === 2) {
    //     menCount++;
    // }
    switch (first){
        case 1:
        case "1": // ===
            womenCount++;
            break;
        case "2":
            menCount++;
            break;
    }
}

console.log("Men:" + menCount);
console.log("Women:" + womenCount);

// Falsy: false, 0, '', NaN, null, undefined, document.all

let array = [];
console.log("Empty array = ", Boolean(array.length));

let carBrand = "honda";

switch (carBrand){
    case 'toyota':
    case 'honda':
        console.log("Japan");
        break;
    case 'kia':
    case 'huinday':
        console.log("South Korea");
        break;
}

