let div = document.getElementsByClassName('div')[0];
let button = document.getElementById('show');

button.onclick=function (event){
    event.preventDefault();

    let age = document.forms['f']['age'].valueAsNumber;
    let name = document.forms['f']['name'].value;
    let surname = document.forms['f']['surname'].value;
    let text = document.createElement('h2');
    text.innerText = name + ' ' + surname + ' ' + age;
    div.appendChild(text);
}