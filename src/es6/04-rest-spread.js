// araus destructuring

let fruits = ['Apple','Banana'];

let [a,b] = fruits;
 console.log(b,fruits[0])
 console.log(fruits);

 //object destructuring
 let user= { username: 'Oscar', age: 34}

let {username, age} = user;

console.log(username,age)
console.log(user.age, user.username)






// spread operator
let person = { name:"oscar", age: 38};

let contry = 'MX';

console.log(person)

let data = {id:1 ,...person, contry} 
console.log(data);

let data2 =  { ...data}

console.log(data2);

// rest

 function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return values[0] + num
}

 sum(1, 1,2,3,4,5,7,8,7);

function solution(json1 = { name: "mr. michi", food: "pescado" }, json2 = { age: 12, color: "Blanco" }) {

    let jsonF = { ...json1, ...json2 }
    console.log(jsonF)
   return jsonF
  }

  let prueba = {name:"david", food: "pescado" }
  let prueba2 = {age:27, color : "blanco"}

  solution(prueba, prueba2);
  solution();