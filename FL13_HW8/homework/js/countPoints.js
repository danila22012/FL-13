

function countPoints(result) {
  const totalScores = result.map((game) =>
    game.split('').filter((score) => score !== ':')
  );
  return totalScores.map(function (arr) {
    if (arr[0] > arr[1]) {
      return 3;
    } else if (arr[0] < arr[1]) {
      return 0;
    } else {
      return 1;
    }
  }).reduce((prev, next) => prev + next);
}
  

 let a = countPoints(['3:1','1:0','0:0','1:2','4:0','2:3','1:1','0:1','2:1','1:0',]);
console.log(a)
  
