    const input = `4
    1
    5
    7
    11`.split('\n').map(Number);

    const n = input[0];
    const onlyArr = input.slice(1);

    const solution = (arr, n) => {
        const max = arr.reduce((acc, cur) => Math.max(acc, cur));
        const result = [];
        for (let i = 2; i <= max; i++) {
            let flag = true;
            for (let j = 0; j < n; j++) {
                const remain = arr[0] % i;
                // console.log(remain, arr[j] % i, arr[j], i);
                if (arr[j] % i !== remain) {
                    flag = false;
                    break;
                }
            }
            if (flag) result.push(i);
        }
        return result.join(' ');
    }

    console.log(solution(onlyArr, n));