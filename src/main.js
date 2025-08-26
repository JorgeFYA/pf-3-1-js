function Main() {
  subtractTwoNumbers(8, 3)
  divideThreeNumbers(10, 5 , 2)
  addThreeNumbers(4, 18, -5)
  customOperation(78, 15, 50)
}
export function addTwoNumbers(number1, number2){
  console.log(number1 + number2);
  
  return (number1 + number2)
}

function subtractTwoNumbers(number1, number2){
  console.log(number1 - number2);
  
  return (number1 - number2)
}

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

Main()