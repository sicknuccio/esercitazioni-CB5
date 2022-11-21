//variable declarations
const argvs = process.argv;
const argv = argvs.slice(3);
const operator = argvs[2];
const num1 = parseFloat(argv[0]);
const num2 = parseFloat(argv[1]);

//SWITCH exercise 3
switch (operator) {
  case "sum":
    let s = 0;
    for (let i = 0; i < argv.length; i++) {
      s = s + parseFloat(argv[i]);
    }

    console.log(operator + "=" + s);
    break;
  case "sub":
    console.log(operator + "=" + (num1 - num2));
    break;
  case "mul":
    let m = 1;
    for (let i = 0; i < argv.length; i++) {
      m = m * parseFloat(argv[i]);
    }
    console.log(operator + "=" + m);
    break;
  case "div":
    if (num2 === 0) {
      console.log("Il secondo argomento non è valido");
      break;
    } else console.log(operator + "=" + num1 / num2);
    break;
  default:
    console.log();
    break;
}

//IF with 2 arguments
// if (operator === "sum") {
//   console.log(operator + "=" + (num1 + num2));
// } else if (operator === "sub") {
//   console.log(operator + "=" + (num1 - num2));
// } else if (operator === "mul") {
//   console.log(operator + "=" + num1 * num2);
// } else if (operator === "div") {
//   if (num2 === 0) {
//     console.log("Il secondo argomento non è valido");
//   } else console.log(operator + "=" + num1 / num2);
// }

//SWITCH with 2 arguments
// switch (operator) {
//   case "sum":
//     console.log(operator + "=" + (num1 + num2));
//     break;
//   case "sub":
//     console.log(operator + "=" + (num1 - num2));
//     break;
//   case "mul":
//     console.log(operator + "=" + num1 * num2);
//     break;
//   case "div":
//     if (num2 === 0) {
//       console.log("Il secondo argomento non è valido");
//       break;
//     } else console.log(operator + "=" + num1 / num2);
//     break;
// }
