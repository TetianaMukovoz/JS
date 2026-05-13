function user(id, name, surname, email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let arrOfUsers=[
    new user(1,'Name1', 'Sur1', 'em1', 'ph1'),
    new user(208,'Name2', 'Sur2', 'em2', 'ph2'),
    new user(32,'Name3', 'Sur3', 'em3', 'ph3'),
    new user(4,'Name4', 'Sur4', 'em4', 'ph4'),
    new user(5,'Name5', 'Sur5', 'em5', 'ph5'),
    new user(61,'Name6', 'Sur6', 'em6', 'ph6'),
    new user(7,'Name7', 'Sur7', 'em7', 'ph7'),
    new user(8,'Name8', 'Sur8', 'em8', 'ph8'),
    new user(9,'Name9', 'Sur9', 'em9', 'ph9'),
    new user(10,'Name10', 'Sur10', 'em10', 'ph10'),
]
let sortUsers = arrOfUsers.sort((a, b) => a.id-b.id);
console.log(sortUsers)