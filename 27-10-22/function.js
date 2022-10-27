export  { sum , sub, mult, div };

function sum(num, num2, operator) {
    let totalSum = 0;
    totalSum = num + num2;
    return totalSum;
}

function sub(num, num2, operator){
    let totalSub = 0;
    totalSub = num - num2;
    return totalSub;
}

function mult(num, num2, operator){
    let totalMult = 0;
    totalMult = num * num2;
    return totalMult;
}

function div(num, num2, operator){
    let totalDiv = 0;
    totalDiv = num / num2;
    return totalDiv;
}
