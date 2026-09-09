let button = document.getElementById('send');

button.onclick =function (event){
    event.preventDefault();

    let rowNum= document.forms['form']['rowNum'].valueAsNumber;
    let colNum = document.forms['form']['boxNum'].valueAsNumber;
    let info = document.forms['form']['info'].value;
    let table = document.createElement('table');

    for (let i =0; i<rowNum; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j<colNum; j++){
            let td = document.createElement('td');
            td.innerText = info;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}