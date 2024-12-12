console.log("lesson 2");

// syntax - синтаксис
// keywords - ключевые слова

// variables - переменные
// data types - типы данных

// 1. string - строка, текст
// 2. number - числа
// 3. boolean - булевский, логический
// 4. undefined
// 5. null
// 6. object

// let const var

let email = 'eugene.kiselev@inbox.ru';
let password = 'it\'s me';
let username = "eugene3000";

let posts = 0;
let followers = 1_500_000_000;
let followings = 10;

let isPrivate = true; // 1
let isOfficial = true; // 0
let isPopular = followers > 500_00;

let dateOfBirth;
let phoneNumber = null;

console.log("is popular", isPopular);
console.log("my DOB", dateOfBirth);
console.log("my mobile:", phoneNumber);

// camelCase

// let size = 314;
// let miniSize = 143;
// console.log(miniSize * 100 / size + " % ");

let instagramProfile = {
    email: "eugene@mail.ru", // key : value
    posts: 0,
    followers: 5_000_000,
    followings: 25,
    isPrivate: true,
    isOfficial: false
};

// 958
// 1500 -> 1.5K
// 1_500_000 -> 1.5M
// 1_000_000_000 -> 1B

// conditions - условия

if (isPrivate) {
    console.log(username + "🔒");
}

if (isOfficial) {
    console.log(username + "✅");
}

// let points = 45;
// let lessons = 2;
//
// if(points > 40 && lessons > 4){
//     console.log("next month")
// }
let temperature = 15;

if (followers < -15) {
    console.log(followers);
} else if (followers >= -15 && followers < 0) {
    let temp = (followers / 1000).toFixed(1);
    console.log(temp + "K");
} else if (followers >= 1_000_000 && followers < 1_000_000_000) {
    let temp = (followers / 1_000_000).toFixed(1);
    console.log(temp + "M");
} else {
    let temp = (followers / 1_000_000_000).toFixed(1);
    console.log(temp + "B");
}