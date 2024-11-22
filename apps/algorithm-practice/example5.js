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
  return {
    k: 2,
    word: "graph",
    titles: [
      "graph query",
      "grepp word",
      "grepp test",
      "iraph query",
      "iraph test",
      "grape color",
    ],
  };
}

/**
 * 공간 복잡도:
 */

function check(a, b, k) {
  let count = 0;
  console.log(a, b, k);
  for (let i = 0; i < a.length; i++) {
    if (count > k) return k + 1;
    if (a[i] !== b[i]) count += 1;
  }
  return count;
}
function solution(data) {
  const { k, word, titles } = data;
  let map = new Map();
  let count = Infinity;
  for (let i = 0; i < titles.length; i++) {
    titles[i].split(" ").forEach((v) => {
      const res = check(word, v, k);
      console.log("res:", res, word, count);
      if (res <= k) {
        if (count < res) {
          map.clear();
        }
        count = res;
        map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1);
      }
    });
    console.log("title:", map);
  }
  console.table(data);
}

solution(generateSampleData());

// generateSampleData(2, 2);
// generateSampleData(3, 3);
// generateSampleData(4, 4);

// 개선방향
