/**
 * 3. 거쳐간 경로에 있는 값들의 최소 합
    - 요구사항
    - 2차원 배열이 주어지고 각 배열 칸에 값이 있음
    - 무조건 한 칸 오른쪽 또는 한 칸 밑으로만 움직일 수 있을 때 왼쪽 최상단 → 오른쪽 최하단으로 이동하는 경로 중에 pathSum이 최소인 값 구하기
 *
**/
function generateSampleData(rows, cols, maxValue = 100) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * maxValue) + 1);
    }
    matrix.push(row);
  }
  console.log("ㅡㅡㅡㅡㅡㅡ");
  console.log(`크기 : ${rows} X ${cols}`);
  console.log("ㅡㅡㅡㅡㅡㅡ");
  matrix.forEach((row) => {
    console.log(row.join(" "));
  });
  console.log("ㅡㅡㅡㅡㅡㅡ");

  return matrix;
}

/**
 * 이중 반복문: 각 칸을 한 번씩 처리하므로 시간 복잡도는 O(n × m) (n = 행 수, m = 열 수)입니다.
 * 공간 복잡도: temp 배열이 필요하므로 O(n × m)입니다.
 */
function solution(map) {
  map.forEach((row) => console.log(row));
  let result = Array.from({ length: map.length }, () =>
    Array(map[0].length).fill(0)
  );
  result[0][0] = map[0][0];

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (x === 0 && y === 0) {
      } else {
        result[x][y] =
          map[x][y] +
          Math.min(
            x - 1 < 0 ? Infinity : result[x - 1][y],
            y - 1 < 0 ? Infinity : result[x][y - 1]
          );
      }
    }
  }
  console.table(result);
}

solution(generateSampleData(3, 3));
solution(generateSampleData(4, 4));
solution(generateSampleData(5, 5));
// generateSampleData(2, 2);
// generateSampleData(3, 3);
// generateSampleData(4, 4);

// 개선방향
/**
 * 시간 및 공간 복잡도
 *
 * 시간 복잡도
 * 2차원 배열을 순회하므로 여전히 O(n × m).
 *
 * 공간 복잡도
 * 이전 행의 값만 유지하므로 O(m).
 */
function solution(map) {
  const rows = map.length;
  const cols = map[0].length;

  // DP 배열 생성 (현재 행을 저장)
  let dp = Array(cols).fill(0);

  // 첫 번째 행 초기화
  dp[0] = map[0][0];
  for (let j = 1; j < cols; j++) {
    dp[j] = dp[j - 1] + map[0][j];
  }

  // 나머지 행 처리
  for (let i = 1; i < rows; i++) {
    dp[0] += map[i][0]; // 첫 번째 열 업데이트
    for (let j = 1; j < cols; j++) {
      dp[j] = map[i][j] + Math.min(dp[j], dp[j - 1]); // 현재 칸 업데이트
    }
  }

  // 최종 결과 반환
  return dp[cols - 1];
}

// 테스트
const map = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(solution(map)); // 7
