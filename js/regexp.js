let stringas = document.getElementById('ats').innerText;
console.log(stringas);

let regex = /[0-9]/g;
let tikSkaiciai = stringas.match(regex);

console.log(tikSkaiciai);
for (let i = 0; i < tikSkaiciai.length; i++) {
    tikSkaiciai[i] = parseInt(tikSkaiciai[i]);
    console.log(tikSkaiciai[i] + ' ' + typeof tikSkaiciai[i]);
    console.log(tikSkaiciai[i] + 10);

}