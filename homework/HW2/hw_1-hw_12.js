//HW1 - #67kfznmiMl
//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log('------HW1----------');
let arr=[123,15.05,'hello world',anny={status:"okay"},[1,2,3],23,11,'27','apple','orange',12];
console.log(arr);

//HW2 - #LARqoUj5I
//Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
console.log('------HW2----------');
let book1 = {title: 'Hobbit',pageCount: '300',genre: 'fantasy'}
let book2 = {title: 'Witcher - Last Wish',pageCount: '200',genre: 'fantasy'}
let book3 = {title: 'Ya bachu vas cikavyt pitma',pageCount: '500',genre: 'detective'}
console.log (book1,'\n',book2,'\n',book3)


//HW3 - #sA3Gg1sCp
//Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
console.log('------HW3----------');
book1.authors={name: 'J. R. R. Tolkien',age: 81};
book2.authors={name:'Andrzej Sapkowski',age: 77};
book3.authors={name: 'Illarion Pavliuk',age: 45};
console.log (book1,'\n',book2,'\n',book3)

//HW4 - #jCHFnEbdmFd
// Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log('------HW4----------');
let users=[
    {name: 'name1', username: 'user1', password: '213123123'},
    {name: 'name2', username: 'user2', password: 'fwdwfsdfs'},
    {name: 'name3', username: 'user3', password: '232432rwef'},
    {name: 'name4', username: 'user4', password: 'sfwer2341'},
    {name: 'name5', username: 'user5', password: 'qdqdqasd1'},
    {name: 'name6', username: 'user6', password: 'qrqweqwe1'},
    {name: 'name7', username: 'user7', password: 'qeqeqwdas'},
    {name: 'name8', username: 'user8', password: 'svsvwdq43'},
    {name: 'name9', username: 'user9', password: 'wewerw1'},
    {name: 'name10', username: 'user10', password: 'wrsvse42553'},
]

for (let i=0; i<=9; i++){
    console.log(users[i].password)
}

//HW5 - #coYydZuaeEB
// описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
console.log('------HW5----------');
temp=[
    {nameDay: 'Monday',morning: 10, day: 20, evening: 10},
    {nameDay: 'Tuesday',morning: 10, day: 20, evening: 10},
    {nameDay: 'Wednesday',morning: 10, day: 20, evening: 10},
    {nameDay: 'Thursday',morning: 10, day: 20, evening: 10},
    {nameDay: 'Friday',morning: 10, day: 20, evening: 10},
    {nameDay: 'Saturday',morning: 10, day: 20, evening: 10},
    {nameDay: 'Sunday',morning: 10, day: 20, evening: 10},
]
console.log(temp);

//HW6 - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’.
console.log('------HW6----------');
let six_x=15;
if (six_x!==0){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

//HW7 - #3ckURgvs
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
console.log('------HW7----------');
let time = 15;

if (time >= 0 && time <= 15) {
    console.log('First quarter');
}
else if (time >= 16 && time <= 30) {
    console.log('Second quarter');
}
else if (time >= 31 && time <= 45) {
    console.log('Third quarter');
}
else if (time > 45 && time <= 59){
    console.log('Fourth quarter')
}
else{
    console.log('Invalid input');
}


//HW8 - #UMoNq4biWGe
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log('------HW8----------');
let day = 21;

if (day>=1&&day<=10){
    console.log('1st');
}
else if (day>=11&&day<=21) {
    console.log('2d');
}
else if (day<=0||day>=31){
    console.log('incorrect');
}
else{
    console.log('3d');
}

//HW9 - #KzrtqyQ
//Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день.
console.log('------HW9----------');
let day_name = 'Wednesday';
switch (day_name){
    case'Monday':
        console.log('English', 'Math', 'PE');
        break;
    case'Tuesday':
        console.log('Chem', 'Biology');
        break;
    case'Wednesday':
        console.log('English', 'Literature', 'History');
        break;
    case'Thursday':
        console.log('Technology', 'Math', 'German');
        break;
    case'Friday':
        console.log('German', 'Literature');
        break;
    case'Saturday':
        console.log('Rest');
        break;
    case 'Sunday':
        console.log('Rest');
        break;
    default:
        console.log('Incorrect input');
        break;
}

//HW10 - #uwsz1RnTQJ1
//Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати, коли введені рівні числа.
console.log('------HW10----------');
let a =5;
let b=4;
if(a>=b){
    console.log(a);
}
else{
    console.log(b);
}

//HW11 - #iBvqtjEm
// змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код, який буде присвоювати змінній х
// значення “default”, якщо ви намагаєтесь присвоїти в неї falsy-значення.
console.log('------HW11----------');

let def_x='qwerty';

//let el_x=undefined;
let el_x= 'hello';
if(el_x===undefined||el_x===null||el_x===NaN||el_x===0||el_x===''){
    el_x=def_x;
}
console.log('x = ',el_x);

//HW12 - #awLXL6TBzg
// з файлу arrays.js взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
console.log('------HW12----------');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let lengthArr=coursesAndDurationArray.length;
for (let i=0; i<=lengthArr-1;i++){
    if (coursesAndDurationArray[i].monthDuration>=5){
        console.log('super', 'on array ', [i]);
    }
}

