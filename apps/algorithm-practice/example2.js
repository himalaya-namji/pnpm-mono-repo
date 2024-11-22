function solution(prticipants) {
  let result = [];
  prticipants = prticipants.map((value) => {
    return { ...value, sum: value.score1 + value.score2 };
  });
  prticipants.sort((a, b) => {
    if (a.score1 === b.score1) {
      if (a.score2 === b.score2) {
        return a.id - b.id;
      }
      return b.score2 - a.score1;
    }
    return b.score1 - a.score1;
  });
  console.log(prticipants);
}

// 테스트 데이터
const participants = [
  { id: 1, score1: 20, score2: 60 },
  { id: 2, score1: 40, score2: 30 },
  { id: 3, score1: 40, score2: 30 },
  { id: 4, score1: 45, score2: 25 },
];
solution(participants);
