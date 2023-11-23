function splitArr(str, sep){
const arr = [];
  let num = 1;
for (let i = 0; i < str.length; i ++) {
    if(!(str[i] === '-')){
    let res = str[i] + str[num];
      num ++
      arr.push(res);
  }
  else{
    continue
  }
  console.log(arr)
  
}
}
splitArr('abcgh-cd-ef', '-')