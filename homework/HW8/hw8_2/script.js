let course =
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hello: function(){
            return console.log('hello')
}} ;

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

//в лекції говорилось, що створити глибоку копію із збереженням функцій неможливо, тому не до кінця розумію, як виконати це завдання, хіба що
// створити поверхневу копію,власноруч додавати функцію, або зробити її глобальною і додавати до будь-яких обʼєктів?

courseCopyTwo = Object.assign({}, course);
console.log(courseCopyTwo)
console.log('--------------')
function hello () {
    console.log('hello');
}
courseCopy.hello=hello;
console.log(courseCopy)