Array.prototype.ForEach = function (arr){
    for (let i =0; i<arr.length;i++){
        this.element = arr[i];
    }
}

Array.prototype.filter = function (condition, array){
    let arr = [];
    let j=0;
    for (let i =0; i<array.length;i++) {
        if(condition){
            arr[j]=array[i];
            j++;
        }
    }
    return arr;
}

// cпробувала, але не зовсім вийшло
