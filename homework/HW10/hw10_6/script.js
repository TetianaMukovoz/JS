//1kg = 2,2046 lb

let kg = document.forms['f']['kg'];
let lb = document.forms['f']['lb'];

kg.oninput = function (){
    lb.valueAsNumber=kg.valueAsNumber*2.2046;
}

