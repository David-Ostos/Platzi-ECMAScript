function newUser(name, age, country){

    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David',27,'VE');

function newAdmin(name = 'Oscar', age = 34, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28 ,'PE')