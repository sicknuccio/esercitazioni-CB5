//-------DICHIARAZIONI-------
let dateArr = ["Nuccio", "Giardino", "20", "Diploma"];

//-------OPERAZIONI ESERCIZIO 2-------
   
    for(let i = 0; i <= dateArr.length - 1; i++){
        console.log(dateArr[i]);
        }
   
 dateArr.splice(2, 1, "07/01/2002");      
        
    for(let i = 0; i <= dateArr.length - 1; i++){
        if(i <=  1)
        {
            console.log(dateArr[i].toUpperCase());
        }
        else 
        {
            console.log(dateArr[i]);
        } 
    }

//-------ESERCIZIO AVANZATO-------

//-------DICHIARAZIONI-------

let str = "";


//-------OPERAZIONI-------

for (let i = 0; i <= 6; i++) {
    str += "#";
  }

for(let i = 0; i <= 6; i++){
    console.log(str);
    str = str.slice(1);
}



 




