 
one = document.querySelector("#one").textContent
two = document.querySelector("#two").textContent
three = document.querySelector("#three").textContent
four = document.querySelector("#four").textContent
five = document.querySelector("#five").textContent
six = document.querySelector("#six").textContent
seven = document.querySelector("#seven").textContent
eight = document.querySelector("#eight").textContent
nine = document.querySelector("#nine").textContent
zero = document.querySelector("#zero").textContent

dot = document.querySelector("#dot").textContent
// plus = document.querySelector("#plus").textContent
plus = "+"

// We create two variables that will hold our values
 var first = ''
 var second = ''




calcDisplay = document.querySelector("#calcDisplay")

calcDisplay.value = false


// function writingFunc(params) {

//     myArray = [0,1,2,3,4]
//     alert()
// //   calcDisplay.innerHTML =nine 
// }



function statusChecker(number) {
           
     if (calcDisplay.value == false) {
      calcDisplay.innerHTML = number  
        }
        else {
   calcDisplay.append(number)
        }
    calcDisplay.value = true

}



function writingOne() {
           
     statusChecker(one)

}

function writingTwo() {
   statusChecker(two)
}

function writingThree() {
   statusChecker(three)
}

function writingFour() {
   statusChecker(four)
}

function writingFive() {
   statusChecker(five)
}

function writingSix() {
   statusChecker(six)
}

function writingSeven() {
   statusChecker(seven)
}

function writingEight() {
   statusChecker(eight)
}

function writingNine() {
   statusChecker(nine)
}

function writingZero() {
   statusChecker(zero)
}

function writingDot() {
   statusChecker(dot)
}

function plusPressed(){


    statusChecker(plus)
}

function ACpressed(){
    calcDisplay.innerHTML=''
}


function delPressed(){
    calcDisplay.lastChild.remove()
  
}

function equaltoPressed(){
    Number(calcDisplay.textContent)
    myArray = [1,2,3,4]
    alert(myArray.split(","))
    // var x = "3"
    //  x = Number(x)
    // alert(typeof(x))
  // return alert(Number(calcDisplay.textContent)) 
}








   


// alert(one)

// two = document.getElementById('two').textContent
// alert(two)