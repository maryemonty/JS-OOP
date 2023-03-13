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

class Pet{
    constructor(petName, ownerName, species, breed, comparison){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        this.comparison = comparison;
    }
}



const cane = new Pet ('Gin', 'Gina', 'cane', 'labrador', false)
const gatto = new Pet ('Tonic', 'Gina', 'gatto', 'siamese', false)
const coniglio = new Pet ('Gerry', 'Scotti', 'coniglio', 'fata perlata', false)

const animali = [cane, gatto, coniglio]

for(let i = 0; i < animali.length; i++){

    if(animali[i].ownerName === animali[i].ownerName){
        animali[i].comparison = true
    }else{
        animali[i].comparison = false
    }
    
}

console.log(animali);

