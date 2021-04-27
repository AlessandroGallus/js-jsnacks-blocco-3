var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//creare un array con 5 oggetti corrispondenti a ogni giocatore
var squadra = [
    {
        codice_giocatore:'',
        media_punti:'',
        percentuale_tiri:0,
    },
    {
        codice_giocatore:'',
        media_punti:'',
        percentuale_tiri:0,
    },
    {
        codice_giocatore:'',
        media_punti:'',
        percentuale_tiri:0,
    },
    {
        codice_giocatore:'',
        media_punti:'',
        percentuale_tiri:0,
    },
    {
        codice_giocatore:'',
        media_punti:'',
        percentuale_tiri:0,
    }
];
/* console.log(squadra) */
//generare il codice giocatore tramite la funzione math random e la stessa applicata all'array alfabeto per trovare le lettere random
    var posizione_alfabeto= 0;
for(var i=0; i<squadra.length; i++){
    var codice_giocatore = [];
    for(j=0;j<3;j++){
        posizione_alfabeto= Math.floor(Math.random()*alfabeto.length);
        codice_giocatore.push(Math.floor(Math.random()*10));
        codice_giocatore.push(alfabeto[posizione_alfabeto]);
        squadra[i].codice_giocatore = codice_giocatore.join('')
    }
    /* console.log(squadra[i]); */
}

//generare tramite la funzione math random la media di punti compresa tra 0 e 50
for(var i=0; i<squadra.length; i++){
    squadra[i].media_punti = Math.floor(Math.random()*51)
}

//generare la percentuale di successo compresa tra 0 e 100 tramite la funzione math random

for(var i=0; i<squadra.length; i++){
    squadra[i].percentuale_tiri = Math.floor(Math.random()*101)
}
console.log(squadra);