import readlineSync from 'readline-sync';

function preInterview1(input: string) {
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

function preInterview3(search: string, items: string[], maxResults: number) {
    const results: string[] = [];
    items.forEach((item) => {
        if (results.length >= maxResults) {
            return;
        }
        if (item.toLowerCase().includes(search.toLowerCase())) {
            results.push(item);
        }
    });
    return results;
}

function preInterview5(input: number) {
    let sort: number[] = []
    const numberStr = input.toString();
    for (let i = 0; i < numberStr.length; i++) {
        sort.push(Number(numberStr[i]));
    }

    sort.sort((a, b) => b - a);

    let result: string = '';
    sort.forEach((num) => {
        result += num.toString();
    });

    return Number(result);
}

function preInterview6(t: number[], n: number) {
    let result: number[] = t;
    for (let i = 3; i < n; i++) {
        const sum = result[i - 1]! + result[i - 2]! + result[i - 3]!;
        result.push(sum);
    }

    return result;
}

function main() {
    const result = preInterview1('()))');
    console.log('Result 1:', result);
    const result3 = preInterview3('th', ["Mother", "Think", "Worthy", "Apple", "Android"], 2);
    console.log('Result 3:', result3);
    const result5 = preInterview5(4215);
    console.log('Result 5:', result5);
    const result6 = preInterview6([10, 10, 10], 4);
    console.log('Result 6:', result6);
}

main();