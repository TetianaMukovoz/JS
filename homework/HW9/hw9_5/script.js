let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let MainDiv = document.createElement('div');


for (const el of coursesArray){
    let HeadLineDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText=el.title;
    HeadLineDiv.appendChild(h2);

    let TimeDiv = document.createElement('div');
    let MonthDiv = document.createElement('div');
    let month = document.createElement('h3');
    month.innerText=el.monthDuration;
    MonthDiv.appendChild(month);

    let HourDiv = document.createElement('div');
    let hour = document.createElement('h3');
    hour.innerText=el.hourDuration;
    HourDiv.appendChild(hour);

    TimeDiv.append(MonthDiv,HourDiv);
    TimeDiv.style.display='flex';
    TimeDiv.style.gap='10px';

    let Modules = document.createElement('ul');

    for (let l=0; l<el.modules.length;l++){
        let li = document.createElement('li');
        li.innerText=el.modules[l];
        Modules.appendChild(li);
    }

    MainDiv.append(HeadLineDiv, TimeDiv, Modules)

}
document.body.appendChild(MainDiv);