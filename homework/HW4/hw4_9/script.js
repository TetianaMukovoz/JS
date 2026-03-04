function display_arr(arr){
    for(let i=0;i<arr.length;i++){
        document.write(`
        <div class="person">
        <p>${arr[i].id} - ${arr[i].name} - ${arr[i].age}</p>
        </div>
        `)
    }
}

arr=[
    {
    id:1,
    name: 'Lily',
    age:32
    },
    {
        id:2,
        name: 'Andrea',
        age:28
    },
    {
        id:3,
        name: 'MaryJane',
        age:30
    }
    ]
display_arr(arr);