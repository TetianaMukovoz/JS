let nums = [11,21,3];
//let choice='ascending';
let choice='descending';

function sorting_nums(array, direction){
    let sorted_nums=[];
    if(choice==='ascending'){
        sorted_nums=nums.sort((a,b)=>a-b);
    }
    if (choice==='descending'){
       sorted_nums=nums.sort((a,b)=>a+b);
    }
    return sorted_nums;
}

console.log(sorting_nums(nums,choice));