const words = ['apple', 'banana', 'cat', 'cat','dog', 'elephant', 'fox'];
const obj = {};
for(let i of words) {
  obj[i] = i.length;
    obj[i] ? (obj[i] + 1) : (obj[i] = 1);
  
}
console.log(obj)
