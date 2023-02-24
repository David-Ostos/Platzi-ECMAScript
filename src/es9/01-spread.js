const user = { username: 'Dantes', age: 27, contry: 'VE'}
const {username, ...values} = user;

console.log(username)
console.log(values)

const original = {a: 12, b:43, c:43, d:43, e: [5,4,8]}

const copia = {...original}

console.log(`Esta es el testeo de solo el objeto no especifico, donde se compueba que "${copia === original}" que es el mismo elemento`)

console.log(`Esta es el testeo del objeto especifico, donde se ve que es "${copia.e === original.e}" siendo el mismo bloque`)