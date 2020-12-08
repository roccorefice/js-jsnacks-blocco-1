//BLOCCO 4 SNACK 1A
//Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// var palla = {
//   nome: "palla",
//   peso: 10
// }



//BLOCCO 4 SNACK 1B
//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
//palla.peso = Number(prompt("Quant è realmente il peso della palla?"));



//BLOCCO 4 SNACK 2
//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore.
// var bici = [
//   biciUno = {
//     nome: "cross",
//     peso: 18
//   },
//   biciDue = {
//     nome: "baiky",
//     peso: 10
//   },
//   biciTre = {
//     nome: "overcross",
//     peso: 12
//   }
// ]
//   bici.forEach(function(){
//     bici.sort(function(a, b){
//       return a.peso - b.peso;
//     });
//   });
// console.log(bici[0].peso);



//BLOCCO 4 SNACK 3
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )
// var triangoloRett = {
//   base: 6,
//   altezza: 8
// }
// var ipotenusa = Math.sqrt(Math.pow(triangoloRett.base, 2) + Math.pow(triangoloRett.altezza, 2));
// var perimetro = triangoloRett.base + triangoloRett.altezza + ipotenusa;
// var area = (triangoloRett.altezza * ipotenusa) / 2;
// console.log(perimetro, area);



//BLOCCO 4 SNACK 4A
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// var squadre = [
//   napoli = {
//     nome: "Napoli",
//     punti: 0,
//     falliSubiti: 0
//   },
//   juventus = {
//     nome: "Juventus",
//     punti: 0,
//     falliSubiti: 0
//   },
//   milan = {
//     nome: "Milan",
//     punti: 0,
//     falliSubiti: 0
//   },
//   inter = {
//     nome: "Inter",
//     punti: 0,
//     falliSubiti: 0
//   }
// ]



//BLOCCO 4 SNACK 4B
// //generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti
// for(var key in squadre){
//   squadre[key].punti = Math.floor(Math.random() * 50);
//   squadre[key].falliSubiti = Math.floor(Math.random() * 100);
// }
// console.log(squadre);



//BLOCCO 5 SNACK 2
//Scrivi una funzione che accetti una stringa come
//argomento e la ritorni girata (es. Ciao -> oaiC)
// function reverseString (str) {
//   var reversStr = str.split("").reverse("").join("");
//   return reversStr;
// }
// console.log(reverseString("Ciao"));



//BLOCCO 5 SNACK 1
// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// var zucchine = [
//   zucchina1 = {varieta:"zucchina1", peso:2, lunghezza:8},
//   zucchina2 = {varieta:"zucchina2", peso:4, lunghezza:5},
//   zucchina3 = {varieta:"zucchina3", peso:6, lunghezza:12},
//   zucchina4 = {varieta:"zucchina4", peso:8, lunghezza:16},
//   zucchina5 = {varieta:"zucchina5", peso:10, lunghezza:15},
//   zucchina6 = {varieta:"zucchina6", peso:8, lunghezza:12},
//   zucchina7 = {varieta:"zucchina7", peso:6, lunghezza:18},
//   zucchina8 = {varieta:"zucchina8", peso:4, lunghezza:11},
//   zucchina9 = {varieta:"zucchina9", peso:2, lunghezza:9},
//   zucchina10 = {varieta:"zucchina10", peso:4, lunghezza:17}
// ]
// var pesiDaSommare = [];
// var somma = 0;
// for( var key in zucchine ){
//   pesiDaSommare.push(zucchine[key].peso);
// }
// console.log(pesiDaSommare);
// function sommaDegliElementiDentroArray (arr){
//   var totale = 0;
//   for ( var i = 0; i < arr.length; i++ ){
//     totale += arr[i];
//   }
//   return totale;
// }
// var sommaDeiPesi = sommaDegliElementiDentroArray(pesiDaSommare);
// console.log(sommaDeiPesi);



//BLOCCO 5 SNACK 3
//Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// var piuDi15cm = [];
// var menoDi15cm = [];
// for( var key in zucchine ){
//   if(zucchine[key].lunghezza >= 15){
//     piuDi15cm.push(zucchine[key].lunghezza);
//   } else {
//     menoDi15cm.push(zucchine[key].lunghezza);
//   }
// }
// console.log(piuDi15cm, menoDi15cm);
// var sommaPiuDi15cm = sommaDegliElementiDentroArray(piuDi15cm);
// var sommaMenoDi15cm = sommaDegliElementiDentroArray(menoDi15cm);
// console.log(sommaPiuDi15cm, sommaMenoDi15cm);



//BLOCCO 5 SNACK 4
//Scrivi una funzione che fonda due array (con lo stesso
//numero di elementi) prendendo alternativamente gli
//elementi da uno e dall’altro




//BLOCCO 5 SNACK 4
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”
// var oldArray = ["planet", 6, "pizza", "film", 18, "amazing", true, "perfect", 12, false, "song"];
// var newArray = [];
// function applyValues(array,a,b){
//   if (a < b && b <= array.length){
//       for(var i=a ; i<=b; i++){
//           newArray.push(array[i]);
//         }
//     } else {
//         console.log("you can insert only values between 0 and 10");
//     }
// }
// newarray = applyValues(oldArray,2,8);
// console.log(newArray);