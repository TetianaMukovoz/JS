function Client(id, name, surname, email, phone, order){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order;
}

let arrOfClients=[
    new Client(1,'Name1', 'Sur1', 'em1', 'ph1', [{DevName: 'vacuum', id: 731, price: 7000},{DevName: 'oven', id: 78123, price: 8000},{DevName: 'hair' +
            ' dryer', id: 73431, price: 3000}, {DevName: 'blender', id: 64321, price: 700}]),
    new Client(2,'Name2', 'Sur2', 'em2', 'ph2',[{DevName: 'pc', id: 1313131, price: 20000},{DevName: 'display', id: 3412, price: 5500}, {DevName: 'keyboard', id: 234131, price: 600},{DevName: 'mouse', id: 423421, price: 300}, {DevName: 'headphone', id: 4123121, price: 800}]),
    new Client(3,'Name3', 'Sur3', 'em3', 'ph3', [{DevName: 'headphone', id: 4123121, price: 800},{DevName: 'mouse', id: 423421, price: 150}]),
    new Client(4,'Name4', 'Sur4', 'em4', 'ph4', [{DevName: 'keyboard', id: 41131, price: 300},{DevName: 'mouse', id: 423421, price: 150}, {DevName: 'headphone', id: 4123121, price: 800}]),
    new Client(5,'Name5', 'Sur5', 'em5', 'ph5', [{DevName: 'tv', id: 112131, price: 10000},{DevName: 'remote', id: 1231, price: 100}]),
    new Client(6,'Name6', 'Sur6', 'em6', 'ph6', [{DevName: 'tv', id: 112131, price: 5000},{DevName: 'remote', id: 1231, price: 50}]),
    new Client(7,'Name7', 'Sur7', 'em7', 'ph7', [{DevName: 'tv', id: 112131, price: 10000},{DevName: 'remote', id: 1231, price: 100}, {id: 41131, price: 300},{DevName: 'blender', id: 64321, price: 700}]),
    new Client(8,'Name8', 'Sur8', 'em8', 'ph8', [{DevName: 'pc', id: 1313131, price: 20000},{DevName: 'display', id: 3412, price: 5500}]),
    new Client(9,'Name9', 'Sur9', 'em9', 'ph9',[{DevName: 'keyboard', id: 41131, price: 300},{DevName: 'mouse', id: 423421, price: 150}]),
    new Client(10,'Name10', 'Sur10', 'em10', 'ph10', [{DevName: 'keyboard', id: 234131, price: 600},{DevName: 'mouse', id: 423421, price: 300}]),
]


console.log(arrOfClients)