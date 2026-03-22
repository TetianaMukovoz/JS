let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

let sorted_course=coursesAndDurationArray.sort((c1, c2)=>c2.monthDuration-c1.monthDuration);

console.log('--------Sorted array------------')
console.log(sorted_course);



let filtered_course=coursesAndDurationArray.filter(course=>course.monthDuration>=5);
console.log('--------Filtered array------------')
console.log(filtered_course);





let new_course=coursesAndDurationArray.map((value,index)=>{
    return {
        id:index+1,
        title:value.title,
        monthDuration:value.monthDuration
    }
});
console.log('--------Mapped array------------')
console.log(new_course);