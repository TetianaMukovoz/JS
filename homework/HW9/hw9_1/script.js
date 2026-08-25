const div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

div.style.background = 'blue';
div.style.width = '200px';
div.style.height = '100px';

document.body.appendChild(div);

const cloneNode= div.cloneNode(true);
document.body.append(cloneNode);