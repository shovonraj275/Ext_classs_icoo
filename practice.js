let arr = ['we', ['are', [71,54], true], 'learning'];
let tech = ['js', 'array', 'dom'];
let copy = [52,98,54,62,34]
let Blank =[];
let Map = copy.map((x)=>x*2);

let newArr = arr.concat(tech)
console.log(newArr);
let copyWithIn = copy.copyWithin(3,0,2);
let Fill = copy.fill(25,1,4);
let ForEach = copy.forEach((x)=> Blank.push(x*2));
console.log(copyWithIn);
console.log(copy.every((x)=> x>50));
console.log(copy.some((x)=>x>90));
console.log(arr.filter((x)=> typeof x === 'boolean'));
console.log(copy.find((x) => x>50));
console.log(arr.flat(2));
console.log(Blank);
console.log(Map);
/* 
Array.prototype.with()
Array.prototype.splice()
Array.prototype.sort()
Array.prototype.slice()
Array.prototype.reduce()

*/