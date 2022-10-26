//--------DICHIARAZIONI--------

let inputOperation, firstValue, secondValue;

//--------INPUT-------

alert("Operazioni matematica: 1=Somma,2=Sottrazione,3=Moltiplicazione,4=Divisione,5=Modulo");
inputOperation = prompt("Inserisci valore:");
inputOperation = parseInt(inputOperation);
firstValue = prompt("Inserisci primo valore:");
firstValue = parseFloat (firstValue);
secondValue = prompt("Inserisci secondo valore:");
secondValue = parseFloat(secondValue);


 //--------OPERAZIONI---------

 switch (inputOperation) {

    case 1:
        console.log( firstValue + secondValue);
        break;
    
    case 2:
        console.log( firstValue -  secondValue);
        break;
    
    case 3:
        console.log( firstValue * secondValue);
        break;
    
    case 4:
        console.log( firstValue / secondValue);
        break;

    case 5:
        console.log(firstValue % secondValue);
        break;
    
    default:
        console.log("Il valore inserito non corrisponde a nessuna operazione");
    
}


