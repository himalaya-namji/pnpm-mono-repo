/**
 * 4. 조건에 맞게 최대한 길게 순회
    - 요구사항
    - 2차원 배열이 주어지고 각 배열 칸에 소문자 알파벳 한 글자가 있음
    - 상하좌우 한 칸씩 움직일 수 있고 알파벳 순서가 높은 쪽으로만 움직일 수 있으며 방문했던 곳은 다시 못감
    - 단 한 번 알파벳 순서가 낮은 쪽으로 움직일 수 있음
    - 최대한 길게 움직였을 때의 움직인 거리 구하기
 *
**/
function generateSampleData() {
  return [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
}

/**
 * 공간 복잡도:
 */
function dfs(x, y, grid, visited, result) {
  const directions = [
    [-1, 0], //상
    [1, 0], //하
    [0, -1], //좌
    [0, 1], //우
  ];

  if (
    x < 0 ||
    y < 0 ||
    x >= grid.length ||
    y >= grid[0].length ||
    visited[x][y]
  ) {
    return;
  }

  visited[x][y] = true;

  result.push(grid[x][y]);
  console.log("현재위치:", grid[x][y]);

  for (let [dx, dy] of directions) {
    dfs(x + dx, y + dy, grid, visited, result);
  }
}
function solution(data) {
  const visited = Array.from({ length: data.length }, () =>
    Array(data[0].length).fill(false)
  );
  let result = [];
  dfs(0, 0, data, visited, result);
  console.log(result.join(" "));
  console.table(data);
}

solution(generateSampleData());

// generateSampleData(2, 2);
// generateSampleData(3, 3);
// generateSampleData(4, 4);

// 개선방향
