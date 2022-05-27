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

const display = document.getElementById('display');

/* Functions  */


button1.addEventListener('click', ()=>display.innerText+='1');
button2.addEventListener('click', ()=>display.innerText+='2');
button3.addEventListener('click', ()=>display.innerText+='3');
button4.addEventListener('click', ()=>display.innerText+='4');
button5.addEventListener('click', ()=>display.innerText+='5');
button6.addEventListener('click', ()=>display.innerText+='6');
button7.addEventListener('click', ()=>display.innerText+='7');
button8.addEventListener('click', ()=>display.innerText+='8');
button9.addEventListener('click', ()=>display.innerText+='9');
button0.addEventListener('click', ()=>display.innerText+='0');

buttonMultiplication.addEventListener('click', () =>display.innerText+='×');
buttonDivision.addEventListener('click', () =>display.innerText+='÷');
buttonSum.addEventListener('click', () =>display.innerText+='+');
buttonSubstract.addEventListener('click', () =>display.innerText+='-');

buttonDel.addEventListener('click', () => display.innerText=display.innerText.slice(0,-1));
buttonClear.addEventListener('click', ()=> display.textContent='');
buttonLParenth.addEventListener('click', ()=> display.innerText='(');