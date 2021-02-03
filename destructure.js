const person={name:'Jack William',age:17,job:'facebooker',gfName:'Emma Watson',address:'Kochu Khet',phone:'01717112211',friends:['Tom Hanks','Tom Holland','Tom Hiddlestone']}
//const gfName=person.gfName;
//const phone=person.phone;
const complexObject={
    name:'abc',
    info:{
        address:'Kola Bagan',
        leader:'Tiger'
    }
}
const {leader}=complexObject.info;
//const { phone,gfName,address,salary } = person;
// console.log(gfName, phone,salary, address); 
// console.log(gfName, phone,salary, address); 
// console.log(gfName, phone,salary, address); 
// console.log(gfName, phone,salary, address); 

const friends=['Abul','Babul','Cabul','Dabul','Eabul'];
const [newFriend, nextFriend, ...olderF]=friends;
// console.log(newFriend, nextFriend);
// console.log(olderF);

console.log(leader);