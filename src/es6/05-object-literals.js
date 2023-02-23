// enahced object literals

function newUser(user, age, contry){
    return{
        user: user,
        age: age,
        contry: contry
    }
}

function newUser(user, age, contry, uId){
    return{
        user,
        age,
        contry,
        id:uId
    }
}
console.log(newUser("Dantes", 45, 'MX', 1));