const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('equals');
const clear =document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstvalue="";
let isFirstValue = false;
let secondValue="";
let isSecoundValue= false;
let sign ="";
let resultValue= 0;

for(let i = 0;i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr =e.target.getAttribyte('value');
        if(isFirstValue === false) {
            getFirstValue(atr)
        }
    })
}
function getFirstValue(e1) {
    result.innerHTML = "";
    firstvalue += e1;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(e1){
    if(firstValue != "" && sign != ""){
        secoundValue += e1;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0; i< signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribyte('value');
            isFirstValue = true;
        })
    }
}