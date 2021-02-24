// Connecting button to the function
document.getElementById('button').addEventListener('click', check)
let number1 = 0
let number2 = 0
let counter = 0
let halifax = 0

function check () {
  number1 = document.getElementById('input1').value
  number1 = parseInt(number1)
  number2 = document.getElementById('input2').value
  number2 = parseInt(number2)

  for (counter; counter < number2; counter++) {
    halifax = halifax + number1
  }
  document.getElementById('answer').innerHTML = halifax
}
