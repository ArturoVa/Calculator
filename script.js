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
const newNumberSpan = document.getElementById('number');
const signSpan = document.getElementById('sign');

let answ=null;
let newNumber =null;

/* Functions  */
function addValues(){
    if(display.innerText!==''){
        if(answ===null){
            answ= newNumberSpan.textContent*1;
            newNumberSpan.innerText='';
            answCounter.innerText= answ; 
        }
        else{
            newNumber = newNumberSpan.textContent*1;
        }
    }
}
function clear(){
    newNumberSpan.innerText='';
    answCounter.innerText='';
    signSpan.innerText='';
    answ = null;
    newNumber= null;
}
function newNumbertoNull(newNumber){
    answCounter.innerText = answ;
    newNumber=null; 
    newNumberSpan.innerText = ''
}
//Operations
function sum(){
    if(!isNaN(newNumberSpan.textContent*1)){addValues();
        if(newNumber!==null){
            answ += newNumber;
            newNumbertoNull(newNumber);
        }
    }    
    else{
        newNumberSpan.textContent='';
        return alert('invalid input')
    }
}

function substract(){
    if(!isNaN(newNumberSpan.textContent*1)){addValues();
    if(newNumber!==null){
        answ = answ-newNumber;
        newNumbertoNull(newNumber);
    }
    else{
        newNumberSpan.textContent='';
        return alert('invalid input')
    }
    }
}

function multiply(){
    if(!isNaN(newNumberSpan.textContent*1)){addValues();
    if(newNumber!==null && newNumberSpan.textContent!==''){
        answ *=newNumber;
        newNumbertoNull(newNumber);
    }}
    else{
        newNumberSpan.textContent='';
        return alert('invalid input')
    }
}

function division(){
    if(!(isNaN(newNumberSpan.textContent*1))){addValues();
        if(newNumber!==null && newNumberSpan.textContent!==''){
            if(newNumber===0){
                alert('????????? invalid operation division by 0');
                newNumber = null;
                newNumberSpan.innerText = '';
            }
            else{
                answ = answ/newNumber;
                newNumbertoNull(newNumber);
            }
    }    
    }   
    else{
        newNumberSpan.textContent='';
        return alert('invalid input')
    }
}

function calculateValue(operationSign, operation){ 
    if(signSpan.textContent!==operationSign && answ!==null){
        signSpan.textContent = operationSign;
    }
    else{    
        operation();
    }
    signSpan.textContent = operationSign;
}

/** Button reactions  */
button1.addEventListener('click', ()=>newNumberSpan.innerText+='1');
button2.addEventListener('click', ()=>newNumberSpan.innerText+='2');
button3.addEventListener('click', ()=>newNumberSpan.innerText+='3');
button4.addEventListener('click', ()=>newNumberSpan.innerText+='4');
button5.addEventListener('click', ()=>newNumberSpan.innerText+='5');
button6.addEventListener('click', ()=>newNumberSpan.innerText+='6');
button7.addEventListener('click', ()=>newNumberSpan.innerText+='7');
button8.addEventListener('click', ()=>newNumberSpan.innerText+='8');
button9.addEventListener('click', ()=>newNumberSpan.innerText+='9');
button0.addEventListener('click', ()=>newNumberSpan.innerText+='0');
buttonDot.addEventListener('click', ()=>newNumberSpan.innerText+='.');

buttonMultiplication.addEventListener('click', () =>calculateValue('??',multiply));
buttonDivision.addEventListener('click', () =>calculateValue('??',division));
buttonSum.addEventListener('click', () =>calculateValue('+',sum));
buttonSubstract.addEventListener('click', () =>calculateValue('-',substract));

buttonDel.addEventListener('click', () => newNumberSpan.textContent === '' ? signSpan.innerText= '':newNumberSpan.innerText= newNumberSpan.innerText.slice(0,-1));
buttonClear.addEventListener('click', ()=>clear());

buttonEqual.addEventListener('click',()=>{
    if(signSpan.textContent === '??'){
        multiply();
        signSpan.textContent='';
    }
    if(signSpan.textContent === '+'){
        sum();
        signSpan.textContent='';
    }
    if(signSpan.textContent === '??'){
        division();
        signSpan.textContent='';
    }
    if(signSpan.textContent === '-'){
        substract();
        signSpan.textContent='';
    }
})
/** Keyboard events */
document.addEventListener('keydown', (e)=>{
    
    if(!isNaN(Number(e.key))){/** If the button clicked is a number, enter the number clicked*/
        newNumberSpan.innerText+= Number(e.key) 
    }
    else if(e.key==='+'){buttonSum.click()}
    else if(e.key==='-'){buttonSubstract.click()}
    else if(e.key==='*'){buttonMultiplication.click()}
    else if(e.key==='/'){buttonDivision.click()}
    else if(e.key==='Enter'){buttonEqual.click()}
    else if(e.key==='Backspace'){buttonDel.click()}
    else if(e.key==='.'){buttonDot.click()}
}
)