function min_value(arr){
    min=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

let arr=[1,5,2,54,1,0,-0.11,1,0.23,-0.234,10,-0.453,11,65,2];

console.log(min_value(arr));