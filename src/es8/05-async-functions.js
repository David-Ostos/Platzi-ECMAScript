 const fnAsync = () =>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=> resolve('async!!'), 2000)
            : reject(new Error('Error!'));
    })
 }

 const anotherFn = async () =>{
    const somthig = await fnAsync();
    console.log(somthig);
    console.log("Hello");
 }

 console.log('Before')

anotherFn();
console.log('After');