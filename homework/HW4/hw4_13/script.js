function exchange_currency(sumUAN, currencyValues, exchangeCurrency) {
    let ex_val=0;
    for(let i=0;i<currencyValues.length;i++){
        if(currencyValues[i].currency===exchangeCurrency){
            ex_val=currencyValues[i].value;
        }
    }
    return sumUAN/ex_val;
}


console.log(exchange_currency(100,[{currency:`USD`,value:44},{currency:`EUR`,value:51}],`EUR`));