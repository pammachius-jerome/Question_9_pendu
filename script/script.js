// Déclaration des variable global
// let numeroMot;
let message = document.getElementById("message");
let lettreProposeEcoute = document.getElementById("lettres");
let imagePendu = document.getElementById("imagePendu");
let lettreMot;
let motSecret;
let lettrePropose = document.getElementsByClassName("btn-check"); 

// sélection aléatoire du mot
function motAleatoire () {
    motSecret = tableau[Math.floor(Math.random() * 149)];
    return motSecret;
}
motAleatoire();
// écoute des lettres proposé
lettreProposeEcoute.addEventListener("change", test);
function test () {
    // console.log("bon click");
    lettrePropose = document.querySelector('input[type="checkbox"]:checked').value;
    console.log(lettrePropose);
    lettrePropose = "";
    console.log("fin " + lettrePropose);
}