let visiting = [];
if (localStorage.getItem('VisitDate')){
    visiting = JSON.parse(localStorage.getItem('VisitDate'))
}

let lastVisit = visiting[visiting.length-1];
let newVisit = new Date();

visiting.push(newVisit);

localStorage.setItem('VisitDate', JSON.stringify(visiting));


let num = document.getElementById('num');
let current = localStorage.getItem('current')

window.onload =function (){
    if (lastVisit) {
        let diff = newVisit - new Date (lastVisit);
        if (diff >= 10000) {
            let number = Number(current);
            number += 10;

            localStorage.setItem('current', String(number));
            num.innerText = String(number);
        }
    }

}

