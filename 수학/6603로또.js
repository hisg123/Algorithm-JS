const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split('\n').slice(0, -1).map(el => el.split(' ').map(Number));


const solution = (arr) => {
    const result = [];
    arr.forEach(el => {
        const [n, ...numbers] = el;
        const pick = [];
        
        const dfs = (index) => {
            if (index === n) {
                if (pick.length === 6) {
                    result.push(pick.join(' '));
                };
                return;
            }

            pick.push(numbers[index]);
            dfs(index + 1);

            pick.pop();
            dfs(index + 1);
        }
        dfs(0);
        result.push('');
    })

    return result.join('\n');
}


console.log(solution(input));