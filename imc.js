
let taille = Number (prompt("Indiquer votre taille en cm"));
let poids = Number (prompt ("Indiquer votre poids en kg"));

function calcIMC(taille, poids) {
    taille = taille / 100;
    let calcTaille = taille * taille;
    return poids / calcTaille;
}

const imc = calcIMC(taille, poids);
alert('Votre IMC est de : ' + imc + '.');

if (imc < 18.5) {
    alert("Selon votre IMC, vous êtes trop maigre");
} else if ((imc >= 18.5) && (imc <= 24.9)) {
    alert("Selon votre IMC, vous êtes normal");
} else if ((imc >= 25) && (imc <= 29.9)) {
    alert("Selon votre IMC, vous êtes en surpoids");
} else if ((imc >= 30) && (imc <= 34.9)) {
    alert("Selon votre IMC, vous êtes obèse");
} else if (imc >= 35) {
    alert("Selon votre IMC, vous êtes en obésité sévère");
}





