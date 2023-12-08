// pensez à gérer les - des mots + intégrer un bouton rejouer


// Déclaration des variable global
// let numeroMot;
let message = document.getElementById("message");
let lettreProposeEcoute = document.getElementById("lettres");
let imagePendu = document.getElementById("imagePendu");
let lettreMot;
let motSecret;
let motSecretNormaliser;
let compteurTentative = 10;
let lettrePropose = document.querySelectorAll('input[type="checkbox"]');
let tableauLettres = [];

function lancerJeu() {
    // création du tableau de vérification
    for (let j = 0; j < 26; j++) {
        tableauLettres.push("");
    };
    motAleatoire();
    transformationMot(motSecret);
    tentative(compteurTentative, tableauLettres);

    console.log("mot secret " + motSecret);
    console.log("mot secret normalisé " + motSecretNormaliser);
}

// sélection aléatoire du mot
function motAleatoire() {
    motSecret = tableau[Math.floor(Math.random() * 149)];
    return motSecret;
};
// transformation du mot secret
function transformationMot(motSecret) {

    let tableauMot = motSecret.split("");
    // let motNormalise;
    let tableauMotNormalise = tableauMot;
    let valeur;
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
    for (let i = 0; i < 14; i++) {
        for (let k in tableDeCorrespondance) {

            if (tableauMot[i] == k) {

                tableauMotNormalise[i] = tableDeCorrespondance[k];
            }
        }
    }
    motSecretNormaliser = tableauMotNormalise.join("");
    return motSecretNormaliser;
}
// fonction de récupération des lettres tester
function verification() {
    for (let i = 0; i < 26; i++) {
        if (lettrePropose[i].checked) {
            for (let k = 0; k < 14; k++) {

                if (motSecretNormaliser[k] != lettrePropose[i].value && tableauLettres[i] != lettrePropose[i].value) {
                    // console.log("i= " + i);
                    // console.log("k= " + k);
                    // console.log("mot secret normalisé " + motSecretNormaliser[i]);
                    // console.log("lettre proposé " + lettrePropose[i]);
                    
                    compteurTentative = tentative(compteurTentative);
                    
                }
            }
            tableauLettres[i] = lettrePropose[i].value;
        };

    }
    console.log(tableauLettres);
    for (i = 0; i < 14; i++) {
        for (let j = 0; j < 26; j++) {
            if (motSecretNormaliser[i] == tableauLettres[j]) {
                lettreMot = document.querySelector("#lettre" + i);
                lettreMot.innerHTML = motSecret[i];
            }

        }
    }
    message.innerHTML = "Il vous reste " + compteurTentative + " tentatives.";
    resultat(compteurTentative, tableauLettres);
};
// compteur de tentative et message
function tentative(compteurTentative) {
    if (compteurTentative > 0) {
        compteurTentative--;
        message.innerHTML = "Il vous reste " + compteurTentative + " tentatives.";
    }
    return compteurTentative;
}
// fonction partie gagné et perdue
function resultat(compteurTentative, tableauLettres) {
    if (compteurTentative == 0) {
        message.innerHTML = "Perdue! Le mot à trouver était " + motSecret;
    }
    if (tableauLettres == motSecretNormaliser) {
        message.innerHTML = 'Gagné! <br> <img src="images/Xnbj.gif" alt="Feux d\'artifice" class="img-thumbnail">'
    }
};


// écoute des lettres proposé
lettreProposeEcoute.addEventListener("change", verification);
// lancement du jeu
lancerJeu();