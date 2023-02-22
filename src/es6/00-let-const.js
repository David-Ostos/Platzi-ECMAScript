var lastName = 'David';

lastName = 'Oscar';

console.log(lastName);

/* let fruit = 'Apple';
fruit = 'Orange';
console.log(fruit); */

const animal = 'Dog';

animal = 'cat';

console.log(animal);

const fruit = () =>{
    if(true){
        var fruit1= 'Apple'; // funcion scope
        let fruit2= 'Orange';  // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruit();


