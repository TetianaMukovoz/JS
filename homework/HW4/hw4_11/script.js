function sum(arr){
    let suma=0;
    for(let i=0;i<arr.length;i++){
        suma+=arr[i];
    }
    return suma;
}

let arr=[1,5,2,54,1,0,-0.11,1,0.23,-0.234,10,-0.453,11,65,2];

console.log(sum(arr));