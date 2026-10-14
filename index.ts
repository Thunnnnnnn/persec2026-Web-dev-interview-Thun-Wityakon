import readlineSync from 'readline-sync';

function preInterview1() {
    const input: string = readlineSync.question('Input 1: ');
    if (input.length % 2 !== 0) {
        return false;
    } else {
        for (let i = 0; i < input.length / 2; i++) {
            if (input[i] === '(') {
                if (input[(input.length - 1) - i] !== ')') {
                    return false;
                }
            } else if (input[i] === '[') {
                if (input[(input.length - 1) - i] !== ']') {
                    return false;
                }
            } else if (input[i] === '{') {
                if (input[(input.length - 1) - i] !== '}') {
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;
    }
}

function preInterview5() {
    let input: string = readlineSync.question('Input 5: ');
    if (!Number(input)) {
        return false;
    }

    let sort: number[] = []
    for (let i = 0; i < input.length; i++) {
        sort.push(Number(input[i]));
    }

    sort.sort((a, b) => b - a);

    let result: string = '';
    sort.forEach((num) => {
        result += num.toString();
    });

    return Number(result);
}

function main() {
    // const result = preInterview1();
    // console.log('Result 1:', result);
    const result5 = preInterview5();
    console.log('Result 5:', result5);
}

main();