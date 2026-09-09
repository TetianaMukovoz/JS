let num = document.getElementById('num');
let current = localStorage.getItem('current')
window.onload =function (){
    let number = Number(current);
    number+=1;
    localStorage.setItem('current', String(number));
    num.innerText=String(number);
}