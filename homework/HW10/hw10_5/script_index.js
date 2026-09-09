let visiting = [];
if (localStorage.getItem('VisitDate')){
    visiting = JSON.parse(localStorage.getItem('VisitDate'))
}
visiting.push(new Date());
localStorage.setItem('VisitDate', JSON.stringify(visiting));
