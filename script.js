class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location
    }
}

const x = new User('Carlo','Carletti',1,'Bali')
const y = new User('Carla','Carletta',98,'Francia')

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

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    static sameOwner(cane, gatto) {
        return cane.ownerName === gatto.ownerName ? true : false;
}
}

let cane = new Pet ('Gin', 'Gina', 'cane', 'labrador')
let gatto = new Pet ('Tonic', 'Gina', 'gatto', 'siamese')

let animali = [cane, gatto]

console.log(animali);
console.log(Pet.sameOwner(cane, gatto))


