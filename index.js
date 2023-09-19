// GIVEN ARRAY OF NUMBERS
//  Exercise 1: Check if Any Number is Even
//  Exercise 2: Check if All Numbers are Positive
const num = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
const checkedArr = num.some(elem => elem % 2 == 0);
console.log(checkedArr);
const checkedArr2 = num.every(elem => elem > 0);
console.log(checkedArr2);
// GIVEN ARRAY OF STRINGS
//  Exercise 3: Check if Any String Contains a Specific Character
//  Exercise 4: Check if All Names Start with the Same Letter
const str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const checkedStr = str.some(elem => elem.includes('e'));
console.log(checkedStr);
const checkedStr2 = str.every(elem => elem[0] == 't');
console.log(checkedStr2)