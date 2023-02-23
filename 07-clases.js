//declarando
class User {};

// instancia de la clase 
//const newUser = new User();

class user {
    // metodos
    greeting(){
        return 'Hello';
    }
};

const user1 = new user();
console.log(user1.greeting());

const user2 = new user();
console.log(user2.greeting());

//constructor 

class user {
    constructor(){
        console.log(`nuevo usuario`)
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();
 
// this 

class user {
    constructor(name){
        this.name = name;
        console.log(`Nuevo usuario agregado, el usuadio de: ${name} a sido creado con exito.`)
    }

    // metodos 
    speak(){
        return `Hello`
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const maria = new user('Maria');

console.log(maria.greeting());

// setters getters

class user {
 
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`Nuevo usuario agregado, el usuadio de: ${name} a sido creado con exito.`)
    }

    //metodos
    speak(){
        return 'hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new user('David',15);

console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20)