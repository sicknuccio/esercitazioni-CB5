//-------IMPORTAZIONI FUNZIONI-------

import { sum , sub, mult, div } from "./function.js"

//-------DICHIARAZIONI-------

let inputOperation, firstValue, secondValue;
let res = 0;

//-------OPERAZIONI INPUT-------

alert("Operazioni matematica: +=Somma, - =Sottrazione, * =Moltiplicazione, / =Divisione");
inputOperation = prompt("Inserisci che operazione vuoi effettuare:");
firstValue = prompt("Inserisci primo valore:");
firstValue = parseFloat (firstValue);
secondValue = prompt("Inserisci secondo valore:");
secondValue = parseFloat(secondValue);

//-------OPERAZIONI-------

switch (inputOperation) {

    case "+":
        res = sum(firstValue,secondValue,inputOperation)
        console.log("Il risultato è:", res);
    break;
    
    case "-":
        res = sub(firstValue,secondValue,inputOperation)
        console.log("Il risultato è:", res);
    break;
    
    case "*":
        res = mult(firstValue,secondValue,inputOperation)
        console.log("Il risultato è:", res);
    break;
   
    case "/":
        res = div(firstValue,secondValue,inputOperation)
        console.log("Il risultato è:", res);
    break;
    
    default:
        console.log("Hai inserito un valore errato, riprova");
    }


//-------ESERCIZIO 2-------

const pepo = {
    firstName: "Nuccio",
    lastName: "Giardino",
    age: 20,
    hair: "ricci",
    eyes: "azzurri",
    work: false,
    run: function(){
        console.log("A Nuccio piace giocare a calcio!");
    },
    saluta: function(){
        console.log("Ciao sono Nuccio!");
    },
};





