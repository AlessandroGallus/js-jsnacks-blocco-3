//creazione array di oggetti "zucchine"
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
        lunghezza : 15,
    },
    {
        varieta : 'k',
        peso : 467,
        lunghezza : 17,
    }
];
//creazione di 3 array per dividere le zucchine in zucchine da 15, più corte o più piccole
var zucchine_lunghe = [];
var zucchine_corte = [];
var zucchine_incredibilmente_precise_da_quindici_cm = [];


//creo delle variabili per le somme del peso
var somma_corte = parseInt(0);
var somma_lunghe = parseInt(0);
var somma_15 = parseInt(0);

/* divido le zucchine in base alla loro lunghezza e 
sommo i vari pesi */
for(i=0;i<zucchine.length;i++){
    if(zucchine[i].lunghezza<15){
        somma_corte += zucchine[i].peso
        zucchine_corte.push(zucchine[i]);
    }else if(zucchine[i].lunghezza>15){
        zucchine_lunghe.push(zucchine[i]);
        somma_lunghe += zucchine[i].peso
    }else{
        zucchine_incredibilmente_precise_da_quindici_cm.push(zucchine[i]);
        somma_15 += zucchine[i].peso
    }
}


//stampo gli array e i relativi pesi
console.log(zucchine_corte);
console.log('il peso delle zucchine corte è '+ somma_corte/1000 + 'kg')
console.log(zucchine_lunghe);
console.log('il peso delle zucchine lunghe è '+ somma_lunghe/1000 + 'kg')
console.log(zucchine_incredibilmente_precise_da_quindici_cm);
console.log('il peso delle zucchine da 15 cm è '+ somma_15/1000 + 'kg')

