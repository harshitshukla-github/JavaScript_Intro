/* The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value. */
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')); // Expected output: 1

map1.set('a', 97);

console.log(map1.get('a')); // Expected output: 97

console.log(map1.size); // Expected output: 3

map1.delete('b');

console.log(map1.size); // Expected output: 2