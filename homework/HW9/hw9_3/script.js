let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

let MainDiv = document.createElement('div');

for (let i =0; i<coursesAndDurationArray.length;i++){
    let div = document.createElement('div');
    div.innerText='title: ' + coursesAndDurationArray[i].title + '| monthDuration: ' +coursesAndDurationArray[i].monthDuration;
    MainDiv.appendChild(div);
}
document.body.appendChild(MainDiv);