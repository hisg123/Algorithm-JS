const input = `5 0
-7 -3 -2 5 8`.split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const solution = (n, s, arr) => {

  let count = 0;
  const pick = [];
  const dfs = (index) => {
    if (index === n) {
      const sum = pick.reduce((cur, acc) => cur + acc, 0);
      if (sum === s) count++;
      return;
    }

    pick.push(arr[index]);
    dfs(index + 1);
    pick.pop();
    dfs(index + 1);


    return count;
  }

  count = dfs(0);
  if (s === 0) count--;
  return count;
}

console.log(solution(N, S, arr))