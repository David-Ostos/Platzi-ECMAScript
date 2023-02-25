class user {
 
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`Nuevo usuario agregado, el usuadio de: ${name} a sido creado con exito.`)
    }

    //metodos
    #speak(){
        return 'hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const bebeloper = new user('David',15);

console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20)