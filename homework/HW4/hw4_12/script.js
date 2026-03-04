function swap(arr,in1,in2){
    if(in1>=arr.length||in2>=arr.length){
        console.log('Invalid input');
        return 0;
    }
    else{
        let c=arr[in1];
        arr[in1]=arr[in2];
        arr[in2]=c;
        return arr;
    }
}

let arr=[1,5,2,54,1,0,-0.11,1,0.23,-0.234,10,-0.453,11,65,2];
console.log(swap(arr,1,7));