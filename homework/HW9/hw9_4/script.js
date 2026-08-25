let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

for (const el of coursesAndDurationArray){
    let div = document.createElement('div');

    let h1 = document.createElement('h1');
    h1.innerText=el.title;

    let p = document.createElement('p');
    p.innerText=el.monthDuration

    div.append(h1,p);

    document.body.appendChild(div);
}
