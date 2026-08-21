let course =
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hello: function(){
            return console.log('hello')
}
    } ;

console.log(course)

//deep copy
let courseCopy=JSON.stringify(course);
console.log(courseCopy)

courseCopy = JSON.parse(courseCopy)
console.log(courseCopy)

//undefined,null,NAN checks

courseCopy?.title;
courseCopy.month?.startMonth;

//functions
let keys = Object.keys(course);
let newCopy={};

for (let i = 0; i<keys.length;i++){
    let key = keys[i];
    newCopy[key] = course[key];
    console.log(course[key]);
}

console.log('--------------')
console.log(newCopy)