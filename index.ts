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

function main() {
    const result = preInterview1();
    console.log('Result 1:', result);
}

main();