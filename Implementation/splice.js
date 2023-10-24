function spliceArray (arr, first, count,added){
    const newArr = [];
   for(let i = 0; i < arr.length; i++) {
     if(i < first || i >= first +count){
       added = arr[i];
       newArr.push(added);
     } else  if (added) {
        added = newArr[first]
        newArr.push(added)
     }
   }
    console.log(newArr);
  }
  spliceArray([1,5,6,8,9,10,56,69],1,2,3)  
