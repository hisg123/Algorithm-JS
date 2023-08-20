const input = `5 0
-7 -3 -2 5 8`.split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const solution = () => {

  const pick = [];
  let count = 0;
  const getCombinationCount = (index) => {
    if (index === N) {
      const sum = pick.reduce((a, b) => a + b, 0);
      if (sum === S) count++;
      return;
    }

    pick.push(arr[index]);
    getCombinationCount(index + 1);

    pick.pop();
    getCombinationCount(index + 1);

    
    return count;
  }
  count = getCombinationCount(0);

  if (S === 0) count--;
  return count;
}


console.log(solution());