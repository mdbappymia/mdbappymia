let arr = [
  19, 13, 16, 11, 18, 15, 13, 4, 15, 14, 15, 13, 7, 3, 4, 14, 15, 3, 17, 18, 15,
  7, 7, 18, 16, 16, 19, 5, 18, 1, 10, 10, 0, 15, 13, 2, 5, 10, 2, 7, 17, 10, 19,
  7, 15, 0, 18, 14, 4, 3, 15, 14, 4, 4, 5, 19, 7, 15, 4, 8, 1, 14, 17, 7, 14,
  16, 16, 3, 4, 7, 15, 6, 3, 4, 11, 1, 1, 1, 5, 5, 16, 13, 16, 5, 11, 12, 16,
  19, 11, 3, 7, 14, 8, 5, 13, 3, 8, 12, 0, 19,
];

// for (let i = 0; i < 100; i++) {
//   const num = parseInt(Math.floor(Math.random() * 20));
//   arr.push(num);
// }
// console.log(arr);

function countNumInArr(num, arr) {
  const newArr = arr.filter((a) => a == num);
  console.log(newArr.length);
  //   console.log(newArr);
}
countNumInArr(0, arr);
