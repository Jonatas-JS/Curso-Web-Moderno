let a = 7.64;
let b = 94.19;
let temp = 0; // => variavel temporária para armazenar valores

temp = a;
a = b;
b = temp;

// [a, b] = [b, a]; => forma mais adequada para a inversão dos valores
Math.floor(a);
Math.floor(b);
console.log(a);
console.log(b);