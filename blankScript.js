


let h1 = Math.floor(Math.random() * 360);
console.log(h1);

let h2 = 360 - h1;

let s1 = Math.floor(Math.random() * 20) + 75;
let b1 = Math.floor(Math.random() * 20) + 75;

let str1 = "hsl(" + h1 + "," + s1 + "%," + b1 + "%)"
console.log(str1);
let str2 = "hsl(" + h2 + "," + s1 + "%," + b1 + "%)"

document.getElementById("aaron").style.backgroundColor = str1;
document.getElementById("jonah").style.backgroundColor = str2;