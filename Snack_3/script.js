//creo 2 array diversi
var array_1 = [1, 2, 3, 4, 5, 6, 7]
var array_2 = ['a', 'b', 'c', 'd']

//creo  1 array vuoto per l'inserimento
var new_array = [];

/* controllo le rispettive lunghezze degli array e pusho
nell'array nuovo solo fino alla lunghezza dell'array più corto */
if(array_1.length == array_2.length){
    for(i=0; i<array_1.length; i++){
        new_array.push(array_1[i]);
        new_array.push(array_2[i]);
    }
}else if(array_1.length < array_2.length){
    for(i=0; i<array_1.length; i++){
        new_array.push(array_1[i]);
        new_array.push(array_2[i]);
    }
}else if(array_2.length < array_1.length){
    for(i=0; i<array_2.length; i++){
        new_array.push(array_1[i]);
        new_array.push(array_2[i]);
    }
}
console.log(new_array)

  