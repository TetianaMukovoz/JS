let div = document.getElementsByClassName('div')[0];
let button = document.getElementById('submit');

button.onclick=function (event){
    event.preventDefault();
    let age = document.forms['f']['age'].valueAsNumber;
    if (age<18){
        let h2 = document.createElement('h2');
        h2.innerText = 'Age lower than 18!'
        div.appendChild(h2);
    }
}