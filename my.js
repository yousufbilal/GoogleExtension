
let userInput = document.getElementById("userInput") //user input into the array 
let saveButton=document.getElementById("save-btn") //save button is working 
let para = document.getElementById("paragraph")
let arrayFromParse = document.getElementById("arrayFromLocalStorage")
let emptyArray = []

//to put user data into the array 
saveButton.addEventListener("click" ,function(){
let userdata=userInput.value
emptyArray.push(userdata)
para.innerHTML=`<p id="test"> ${emptyArray}</p>`
arrayStorage()// data is stored 
arrayStorageRet() // data is retrived but how do i check 
})

function arrayStorage(){
    let arrayConversion = JSON.stringify(emptyArray)
    localStorage.setItem("retriveArray",arrayConversion)
}

function arrayStorageRet(){
   let dataRetrived= localStorage.getItem("retriveArray")
    let arrayConversionParse= JSON.parse(dataRetrived)
    arrayFromParse.innerHTML= `<p> stored data in array ${arrayConversionParse}</p>`;
}

function deleteFunction(){
    let deleteArray= localStorage.clear(arrayFromParse)
}