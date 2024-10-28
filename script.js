/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km(0.21 € al km)
- va applicato uno sconto del 20 % per i minorenni
- va applicato uno sconto del 40 % per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

"use strict"
console.clear()

const chilometri = parseInt(prompt("quanti km devi fare?"));
const etaPasseggero = parseInt(prompt('Qual e la sua eta?'));
let prezzoTotale;
const prezzoXkm = 0.21;
let scontoDaApplicare = 0;

prezzoTotale = chilometri * prezzoXkm

if (etaPasseggero < 18) {
    scontoDaApplicare = (prezzoTotale * 20) / 100;
    prezzoTotale = prezzoTotale - scontoDaApplicare
}
else if (etaPasseggero > 65) {
    scontoDaApplicare = (prezzoTotale * 40) / 100;
    prezzoTotale = prezzoTotale - scontoDaApplicare
}

prezzoTotale = prezzoTotale.toFixed(2);





console.log(chilometri);
console.log(`la sua eta e ${etaPasseggero} `);
console.log("Il prezzo che dovra pagare sara" + " " + prezzoTotale);