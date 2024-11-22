function solution() {
  let result = [];
  const count = 2;
  const value = [
    [1, 2, 3],
    [2, 3, 1],
    [3, 1, 2],
  ];
  // 오른쪽 복사
  for (let n = 0; n < count; n++) {
    for (let i = 0; i < value.length; i++) {
      const temp = [];
      result.push(value[i]);

      for (let j = 0; j < value[i].length; j++) {
        temp.push(value[i][j]);
      }
      while (temp.length > 0) {
        result[i].push(temp.pop());
      }
    }

    // 아래로 복사
    for (let i = value.length - 1; i > -1; i--) {
      result.push(value[i]);
    }
  }
  console.log(result);
}

solution();

// function solution() {
//     let result = [];
//     const count = 2;
//     const value = [
//       [1, 2, 3],
//       [2, 3, 1],
//       [3, 1, 2],
//     ];

//     for (let n = 0; n < count; n++) {
//       // 오른쪽 복사 및 역순 추가
//       for (let i = 0; i < value.length; i++) {
//         // 원본 배열 복사
//         const originalRow = [...value[i]];

//         // 역순 추가
//         const reversedRow = [...value[i]].reverse();
//         result.push([...originalRow, ...reversedRow]);
//       }

//       // 아래로 복사
//       for (let i = value.length - 1; i >= 0; i--) {
//         result.push([...value[i]]);
//       }
//     }

//     console.log(result);
//   }

//   solution();
