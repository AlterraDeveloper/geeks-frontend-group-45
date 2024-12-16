console.log("functions");

// Functions


// 1. function declaration - определение функции
function applyNewYearSkin() {
    let newYearImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/049/515/118/small_2x/colorful-2025-happy-new-year-sign-featuring-vibrant-numbers-cut-out-transparent-png.png";
    setBackground(newYearImageUrl);
}

// 2. function expression - функциональное выражение
let applyValentinesDaySkin = function () {
    let imageUrl = "https://png.pngtree.com/png-vector/20210124/ourmid/pngtree-happy-valentines-day-png-background-design-png-image_2792077.jpg";
    setBackground(imageUrl);
}

applyNewYearSkin();
applyValentinesDaySkin();

// DRY - Don't repeat yourself
// Refactoring

function applySkin(theme) {
    let imageUrl;
    switch (theme) {
        case "new-year":
            imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/049/515/118/small_2x/colorful-2025-happy-new-year-sign-featuring-vibrant-numbers-cut-out-transparent-png.png";
            break;
        case "valentines-day":
            imageUrl = "https://png.pngtree.com/png-vector/20210124/ourmid/pngtree-happy-valentines-day-png-background-design-png-image_2792077.jpg";
            break;
        default:
            imageUrl = "https://chicagobrickco.com/wp-content/uploads/2022/03/brick-wall-3170274_1280.jpg";
    }
    setBackground(imageUrl);
}

function setBackground(imageUrl){
    document.body.style.backgroundImage = "url(" + imageUrl + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top";
    document.body.style.backgroundSize = "cover";
}

function getCashback(amount, percent){
    let cashback = 0;
    cashback = amount * (percent / 100);
    return cashback;
}

function getMbankName(name, surname){
    let result = name + " " + surname[0].toUpperCase() + ".";
    return result;
}


console.log("My mbank name = ",
    getMbankName("Evgeniy", "kiselev"))

console.log("My mbank name = ",
    getMbankName("Kiselev", "Evgeniy" ))





