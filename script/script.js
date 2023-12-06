// Déclaration des variable global
// let numeroMot;
let message = document.getElementById("message");
let lettreProposeEcoute = document.getElementById("lettres");
let imagePendu = document.getElementById("imagePendu");
let lettreMot;
let motSecret;
let motSecretNormaliser;
// let lettrePropose = document.getElementsByClassName("btn-check"); 
let lettrePropose = document.querySelectorAll('input[type="checkbox"]');
let tableauLettres = [];
// création du tableau de vérification
for (let j = 0; j < 10; j++) {
    tableauLettres.push("");
};  
// sélection aléatoire du mot
function motAleatoire () {
    motSecret = tableau[Math.floor(Math.random() * 149)];
    return motSecret;
}
motAleatoire();

const tableDeCorrespondance = {
  "é": "e",
  "è": "e",
  "ê": "e",
  "ë": "e",
  "à": "a",
  "â": "a",
  "ä": "a",
  "ç": "c",
  "ù": "u",
  "û": "u",
  "ü": "u",
  "ï": "i",
  "î": "i",
  "ô": "o",
  "ö": "o",
  "œ": "oe",
};
console.log("mot secret: " + motSecret);
function transformerMot(motSecret, tableDeCorrespondance) {
  let motSecretNormaliser = motSecret;
//   presque
motSecretNormaliser = motSecret.replaceAll(/[éàèùï]/g, tableDeCorrespondance);
  console.log("mot secret normalisé " + motSecretNormaliser);
  return motSecretNormaliser;
}
transformerMot(motSecret);



// écoute des lettres proposé
lettreProposeEcoute.addEventListener("change", test);
function test () {
    for (let i = 0; i < 10; i++) {

        if (lettrePropose[i].checked) {
            tableauLettres[i] = lettrePropose[i].value;

        };
    }
    console.log(tableauLettres);
    for (i = 0; i < 14; i++) {
        for (let j = 0; j < 10 ; j++) {
            if (motSecret[i] == tableauLettres[j]) {
                lettreMot = document.querySelector("#lettre"+ i);
                lettreMot.innerHTML = motSecret[i];
                console.log("bingo!");
            }

        }
    }
    };

