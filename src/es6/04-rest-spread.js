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