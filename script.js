const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById('0');

const buttonMultiplication = document.getElementById('multiplication');
const buttonDivision = document.getElementById('division');
const buttonSubstract = document.getElementById('substract');
const buttonSum = document.getElementById('sum');

const buttonEqual = document.getElementById('equal');
const buttonLParenth = document.getElementById('left-parenth');
const buttonRParenth = document.getElementById('right-pareth');
const buttonDot = document.getElementById('dot');

const buttonClear = document.getElementById('CLEAR');
const buttonDel  = document.getElementById('DEL');

const display = document.querySelector('.display');
const answCounter = document.getElementById('answ');
const newNumberDisplay = document.getElementById('number');

let answ=null;
let newNumber =null;

/* Functions  */
function addValues(){
    if(display.innerText!==''){
        if(answ===null){
            answ= newNumberDisplay.textContent*1;
            newNumberDisplay.innerText='';
        }
        else{
            newNumber = newNumberDisplay.textContent*1;
        }
    }
}
function clear(){
    newNumberDisplay.innerText='';
    answCounter.innerText='';
    answ = null;
    newNumber= null;
}
function newNumbertoNull(newNumber){
    answCounter.innerText = answ;
    newNumber=null; 
    newNumberDisplay.innerText = ''
}
function sum(){
    if(newNumber!==null){
        answ += newNumber;
        newNumbertoNull(newNumber);
    }
}
function substract(){
    if(newNumber!==null){
        answ = answ-newNumber;
        newNumbertoNull(newNumber);
    }
}
function multiply(){
    if(newNumber!==null){
        answ *=newNumber;
        newNumbertoNull(newNumber);
    }
}
function division(){
    if(newNumber!==null){
        if(newNumber===0){
            alert('invalid operation');
            newNumber = null;
            newNumberDisplay.innerText = '';
        }
        else{
        answ = answ/newNumber;
        newNumbertoNull(newNumber);
    }
    }
}
button1.addEventListener('click', ()=>newNumberDisplay.textContent+='1');
button2.addEventListener('click', ()=>newNumberDisplay.innerText+='2');
button3.addEventListener('click', ()=>newNumberDisplay.innerText+='3');
button4.addEventListener('click', ()=>newNumberDisplay.innerText+='4');
button5.addEventListener('click', ()=>newNumberDisplay.innerText+='5');
button6.addEventListener('click', ()=>newNumberDisplay.innerText+='6');
button7.addEventListener('click', ()=>newNumberDisplay.innerText+='7');
button8.addEventListener('click', ()=>newNumberDisplay.innerText+='8');
button9.addEventListener('click', ()=>newNumberDisplay.innerText+='9');
button0.addEventListener('click', ()=>newNumberDisplay.innerText+='0');

buttonMultiplication.addEventListener('click', () =>{
    addValues();
    multiply();
});
buttonDivision.addEventListener('click', () =>{
    addValues();
    division();
});
buttonSum.addEventListener('click', () =>{
    addValues();
    sum();
});
buttonSubstract.addEventListener('click', () =>{
    addValues();
    substract();
});

buttonDel.addEventListener('click', () => newNumberDisplay.innerText=display.innerText.slice(0,-1));
buttonClear.addEventListener('click', ()=>clear());
