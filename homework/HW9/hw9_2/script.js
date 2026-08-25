let array = ['Main','Products','About us','Contacts'];

let list = document.createElement('ul');

for (const el in array){
    let li = document.createElement('li');
    li.classList.add(el);
    li.innerText=array[el];
    list.appendChild(li);
}

document.body.appendChild(list);