let cards =[
    {cardSuit:'spade',value: 6,color:'black'},
    {cardSuit:'spade',value: 7,color:'black'},
    {cardSuit:'spade',value: 8,color:'black'},
    {cardSuit:'spade',value: 9,color:'black'},
    {cardSuit:'spade',value: 10,color:'black'},
    {cardSuit:'spade',value: 'jack',color:'black'},
    {cardSuit:'spade',value: 'queen',color:'black'},
    {cardSuit:'spade',value: 'king',color:'black'},
    {cardSuit:'spade',value: 'ace',color:'black'},

    {cardSuit:'clubs',value: 6,color:'black'},
    {cardSuit:'clubs',value: 7,color:'black'},
    {cardSuit:'clubs',value: 8,color:'black'},
    {cardSuit:'clubs',value: 9,color:'black'},
    {cardSuit:'clubs',value: 10,color:'black'},
    {cardSuit:'clubs',value: 'jack',color:'black'},
    {cardSuit:'clubs',value: 'queen',color:'black'},
    {cardSuit:'clubs',value: 'king',color:'black'},
    {cardSuit:'clubs',value: 'ace',color:'black'},

    {cardSuit:'diamond',value: 6,color:'red'},
    {cardSuit:'diamond',value: 7,color:'red'},
    {cardSuit:'diamond',value: 8,color:'red'},
    {cardSuit:'diamond',value: 9,color:'red'},
    {cardSuit:'diamond',value: 10,color:'red'},
    {cardSuit:'diamond',value: 'jack',color:'red'},
    {cardSuit:'diamond',value: 'queen',color:'red'},
    {cardSuit:'diamond',value: 'king',color:'red'},
    {cardSuit:'diamond',value: 'ace',color:'red'},

    {cardSuit:'heart',value: 6,color:'red'},
    {cardSuit:'heart',value: 7,color:'red'},
    {cardSuit:'heart',value: 8,color:'red'},
    {cardSuit:'heart',value: 9,color:'red'},
    {cardSuit:'heart',value: 10,color:'red'},
    {cardSuit:'heart',value: 'jack',color:'red'},
    {cardSuit:'heart',value: 'queen',color:'red'},
    {cardSuit:'heart',value: 'king',color:'red'},
    {cardSuit:'heart',value: 'ace',color:'red'},
]

//знайти піковий туз
let aceOfSpade = cards.find(card=>card.value==='ace'&&card.cardSuit==='spade')
console.log(aceOfSpade);

//всі шістки
let cardsOfSixth=cards.filter(card=>card.value===6);
console.log(cardsOfSixth);

// всі червоні карти
let redCards = cards.filter(card=>card.color==='red');
console.log(redCards);


// всі буби
let diamondCards= cards.filter(card=>card.cardSuit==='diamond');
console.log(diamondCards);

//всі трефи від 9 та більше
let spadeCards= cards.filter(card=>card.cardSuit==='spade'&&(card.value>=9||typeof card.value==='string'));
console.log(spadeCards);








//Додаткове запитання:
//Більшу частину колоди можна описати з використанням циклу, я не могла зрозуміти як це краще зробити, знизу вказую попередній код, який пробувала, але мені здається так не буде зовсім ок писати

// let c=[];
// blackColor=1;
// card_suit=1;
// number=6;
//
// for (let i=0;i<36;i++){
//     while(blackColor===1){
//         while(card_suit===1){
//             c[i]={
//                 cardSuit:'spade',
//                 value:number,
//                 color:'black'
//             }
//             if(number===11){
//                 c[i].value ='jack';
//             }
//             else if (number===12){
//                 c[i].value ='queen';
//             }
//
//             else if (number===13){
//                 c[i].value ='king';
//             }
//
//             else if (number===14){
//                 c[i].value ='ace';
//                 card_suit=2;
//             }
//             number++;
//         }
//     }
// }

