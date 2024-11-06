function calculator() {
let first = document.getElementById(`num1`).value;
let second = document.getElementById(`num2`).value;
let result = Number(first)+Number(second)
let sumBtn = document.getElementById(`sumButton`)
sumButton.addEventListener(`onclick`, sumBtn )
document.getElementById(`result`).value=result;
   
console.log(result)
}
calculator()
