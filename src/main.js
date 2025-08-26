export function addTwoNumbers(number1, number2){
  console.log(number1 + number2);
  
  return (number1 + number2);
}

function subtractTwoNumbers(number1, number2){
  console.log(number1 - number2);
  return (number1 - number2);
}
/* 
function divideThreeNumbers(number1, number2, number3){
  console.log(number1 / number2 / number3);
  
  return (number1 / number2 / number3)
}

function addThreeNumbers(number1, number2, number3){
  //console.log(addTwoNumbers(number1, number2) + number3);
  //return (addTwoNumbers(number1, number2) + number3)

  console.log(number1 + number2 + number3);
  return (number1 + number2 + number3)
}

function customOperation(number1, number2, number3) {
  console.log(number1 + number2 - number3);
  
  return (number1 + number2 - number3)
}
*/

function divideTwoNumbers(number1, number2){
  console.log(number1 / number2);
  return (number1 / number2);
}

function multTwoNumbers(number1, number2){
  console.log(number1 / number2);
  return (number1 * number2);
}

function Main() {
  const bandera = true;
  
  while (bandera) {
    const option = +prompt("Selecciona una opción\n 1. Sumar 2 números\n 2. Restar 2 números\n 3. Dividir 2 números\n 4. Multiplicar 2 números");
    switch (option) {
        case 1:
            const sumNumber1 = +prompt("Ingresa tu primer número");
            const sumNumber2 = +prompt("Ingresa tu segundo número");
            alert(addTwoNumbers(sumNumber1, sumNumber2));
            break;
  
        case 2:
            const subNumber1 = +prompt("Ingresa tu primer número");
            const subNumber2 = +prompt("Ingresa tu segundo número");
  
            alert(subtractTwoNumbers(subNumber1, subNumber2));
            break;
  
        case 3:
            const divNumber1 = +prompt("Ingresa tu primer número");
            const divNumber2 = +prompt("Ingresa tu segundo número");
  
            alert(divideTwoNumbers(divNumber1, divNumber2));
            break;
  
        case 4:
            const multNumber1 = +prompt("Ingresa tu primer número");
            const multNumber2 = +prompt("Ingresa tu segundo número");
  
            alert(multTwoNumbers(multNumber1, multNumber2));
            break;
  
        default:
            alert("Ingresa una opción válida usando números");
            break;
    }
    
    const retry = +prompt("¿Quieres intentar nuevamente?\n 1. Sí\n 2. No");
    if (retry !== 1){
      bandera = false;
    }
  }
}

Main()