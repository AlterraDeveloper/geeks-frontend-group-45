console.log("DOM");


// let yourTeacher = {
//     fullName: "Kiselev Evgeniy Dmitrievich",
//     email: "kiselev@gmail.com",
//     telegram: "@alterradeveloper",
//     githubProfile: "https://github.com/alterradeveloper",
//     yearsInEducation: 3,
//     workExperience: 7,
//     hasEducation: true,
// }
//
// console.log("My telegram", yourTeacher.telegram)

// DOM - Document Object Model
// Manipulations with DOM - Работа(взаимодействие) с DOM
// 1. Search
// 2. Edit (update)
// 3. Remove (delete)
// 4. Events

let $counter = document.querySelector("#counter");
// $counter.innerText = 777;
// $counter.style.color = "orange";

// jQuery

let $minusBtn = document.querySelector("#decrease");
let $resetBtn = document.querySelector("#reset");
let $plusBtn = document.getElementById("increase");

function increaseCounter() {
    let counter = $counter.innerText;
    counter++; // counter += 1;
    $counter.innerText = counter;
    setColor();
}

$plusBtn.addEventListener("click", increaseCounter);


function decreaseCounter() {
    let counter = $counter.innerText;
    counter--; // counter -= 1;
    $counter.innerText = counter;
    setColor();
}

$minusBtn.addEventListener("click", decreaseCounter);

function resetCounter() {
    $counter.innerText = 0;
    setColor();
}

$resetBtn.onclick = resetCounter;

function setColor() {
    let counter = Number($counter.textContent);

    // if (counter === 0) {
    //     $counter.style.color = "gray";
    // } else if (counter > 0) {
    //     $counter.style.color = "green";
    // } else {
    //     $counter.style.color = "red";
    // }

    // if (counter > 0) {
    //     $counter.style.color = "green";
    // } else if (counter < 0) {
    //     $counter.style.color = "red";
    // } else {
    //     $counter.style.color = "gray";
    // }

    if (counter === 0) {
        $counter.style.color = "gray";
    }
    if (counter > 0) {
        $counter.style.color = "green";
    }
    if (counter < 0) {
        $counter.style.color = "red";
    }
}



