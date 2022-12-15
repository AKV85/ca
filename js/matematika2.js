function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let ats = document.getElementById('ats');
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        ats.innerHTML += 'Skaiciu ' + arr1[i] + ' ir ' + arr2[j] + ' sudėtis yra ' + add(arr1[i], arr2[j]) + '<br>';
        ats.innerHTML += 'Skaiciu ' + arr1[i] + ' ir ' + arr2[j] + ' atimtis yra ' + sub(arr1[i], arr2[j]) + '<br>';
        ats.innerHTML += 'Skaiciu ' + arr1[i] + ' ir ' + arr2[j] + ' daugyba yra ' + mult(arr1[i], arr2[j]) + '<br>';
        ats.innerHTML += 'Skaiciu ' + arr1[i] + ' ir ' + arr2[j] + ' dalyba yra ' + div(arr1[i], arr2[j]) + '<br>';
    }
}


// let zenklas = "*";
//
// switch (zenklas) {
//     case "+":
//         add(/* ... */);
//         break;
//     case "-":
//         sub(/* ... */);
//         break;
//     case "*":
//         mult(/* ... */);
//         break;
//     case "/":
//         div(/* ... */);
//         break;
//     default:
//         console.log("Nepavyko");
//         break;
// }
