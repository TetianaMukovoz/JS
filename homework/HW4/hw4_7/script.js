function display_list(li_text, number){
    let i=0;
    while(i<number) {
        document.write(`<ul><li>${li_text}</li></ul>`);
        i++;
    }
}

display_list('element',10);