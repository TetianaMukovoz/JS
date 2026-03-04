function display_arr (arr){
    for(let i=0;i<arr.length;i++){
        document.write(`<ul><li>${arr[i]}</li></ul>`);
    }
}
arr=['hello',12312,'abcdefg',true,131];
display_arr(arr);