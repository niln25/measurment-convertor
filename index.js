/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterPara = document.getElementById("meter-para")
const litrePara = document.getElementById("litre-para")
const massPara = document.getElementById("mass-para")

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn")

btn.addEventListener("click", function () {
    convertLength(inputEl.value)
})

function convertLength(inputValue) {
   // LENGTH //
   const feetConversion = inputValue * 3.2810
   const meterConversion = inputValue / 3.2810
   meterPara.innerHTML = `<p>${inputValue} meters = ${feetConversion.toFixed(3)} feet | ${inputValue} feet = ${meterConversion.toFixed(3)} meters</p>`
   
   // VOLUME //
   const gallonConversion = inputValue * 0.2640
   const literConversion = inputValue / 0.2640
   litrePara.innerHTML = `<p>${inputValue} litres = ${gallonConversion.toFixed(3)} gallons | ${inputValue} gallons = ${literConversion.toFixed(3)} liters</p>`
   
   const poundConversion = inputValue * 2.2040
   const kiloConversion = inputValue / 2.2040
   massPara.innerHTML = `<p>${inputValue} kilos = ${poundConversion.toFixed(3)} pounds | ${inputValue} pounds = ${kiloConversion.toFixed(3)} kilos</p>`
}