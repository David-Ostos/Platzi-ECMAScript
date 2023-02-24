const string  = 'Hello';

console.log(string.padStart(6, '--->'));
console.log(string.padEnd(6, '<---'));
console.log(string.padStart(8, '<--').padEnd(11,'-->'));
console.log(string.padStart(8, '-->').padEnd(11,'<--'));
console.log(string.padStart(9, '>-->').padEnd(13,'<--<'));
console.log(string.padStart(10, '<>--<').padEnd(15,'>--<>'));
