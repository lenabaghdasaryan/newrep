//1.տրված է միաչափ զանգված: Առանց լրացուցիչ զանգված կիրառելու տրված զանգվածի տարրերը դասավորել տրվածին հակառակ ուղղությամբ:
// function getReversedArray(arr) {
//     let length = arr.length - 1;
//     for (let i = 0; i < arr.length / 2; i++) {
//         let elem = arr[i];
//         arr[i] = arr[length - i];
//         arr[length - i] = elem;
//     }
//     console.log(arr)
// }
// getReversedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//2. .տրված է միաչափ զանգված: Ստանալ նոր զանգված, որի սկզբում գրված կլինեն զանգվածի կենտ արժեք ունեցող տարրերը:
// function getOddNumbersFirst(arr) {
//     const newArr = [];
//     arr.filter((elem) => {
//         if (elem % 2 !== 0) {
//             newArr.unshift(elem)
//         }
//         else {
//             newArr.push(elem)
//         }
//     })
//     console.log(newArr)
// }
// getOddNumbersFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// function getOddNumbersFirst(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             newArr.unshift(arr[i]);
//         }
//         else {
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// }
//getOddNumbersFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//3. Տրված զանգվածից գտնել թվաբանական պրոգրեսիա պարունակող թվերը և տպել
function getProgression(arr) {
    let newArr = [];
        for (let i = arr.length; i >= 0; i--){
          let second = arr[i-1];
          let third = arr [i-2];
          if(arr[i]-second ===second - third) {
         newArr.push(arr[i],second,third);
         

        }
        }
    console.log(newArr)
  }
      getProgression([1,4,5,6,7,9,8,10,13,17])
  