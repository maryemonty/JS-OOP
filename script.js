class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location
    }
}

const x = new User('Carlo','Carletti','1','Bali')
const y = new User('Carla','Carletta','98','Francia')

console.log(x.age);
console.log(y.age);

function comp(){
    if (x.age > y.age){
        return `${x.firstName} ${x.lastName} è più vecchio di ${y.firstName} ${y.lastName}`
    }else{
        return `${y.firstName} ${y.lastName} è più vecchio di ${x.firstName} ${x.lastName}`
    }
}

console.log(comp());