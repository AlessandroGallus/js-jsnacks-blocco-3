var zucchine =[
    {
        varieta : 'a',
        peso : 512,
        lunghezza : 18,
    },
    {
        varieta : 'b',
        peso : 429,
        lunghezza : 18,
    },
    {
        varieta : 'c',
        peso : 721,
        lunghezza : 32,
    },
    {
        varieta : 'd',
        peso : 665,
        lunghezza : 11,
    },
    {
        varieta : 'e',
        peso : 444,
        lunghezza : 17,
    },
    {
        varieta : 'f',
        peso : 398,
        lunghezza : 13,
    },
    {
        varieta : 'g',
        peso : 512,
        lunghezza : 14,
    },
    {
        varieta : 'h',
        peso : 442,
        lunghezza : 16,
    },
    {
        varieta : 'j',
        peso : 655,
        lunghezza : 24,
    },
    {
        varieta : 'k',
        peso : 467,
        lunghezza : 17,
    }
];
var somma = parseInt(0);
console.log(zucchine)

for(i=0; i<zucchine.length;i++){
    somma += zucchine[i].peso
}
var peso = somma/1000;
/* zucchine.forEach(element => {
    somma += zucchine.peso
}); */
console.log('la somma dei pesi è ' + peso.toFixed(2) + 'kg')