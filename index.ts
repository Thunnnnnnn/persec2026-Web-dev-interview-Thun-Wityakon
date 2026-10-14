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


function preInterview2(items: string[]) {
    let checkItems: { prefix: string, number: number, afterNumber: string }[] = [];

    for (let i = 0; i < items.length; i++) {
        checkItems.push({
            prefix: items[i]![0]! + items[i]![1], // ถ้า prefix มีความยาวแค่ 2 ตัวอักษร
            number: parseInt(items[i]!.match(/\d+/)?.[0] || '0', 10), // ถ้าตัวเลขมีแค่ชุดเดียว
            afterNumber: items[i]!.replace(/^\D+\d+/, ''), // ส่วนที่อยู่หลังตัวเลข หากตัวเลขมีแค่ชุดเดียว
        });
    }

    checkItems = checkItems.sort((a, b) => {
        const prefixComparison = a.prefix.localeCompare(b.prefix);
        if (prefixComparison !== 0) {
            return prefixComparison;
        }
        return a.number - b.number;
    });

    let result: string[] = [];
    for (let i = 0; i < checkItems.length; i++) {
        result.push(checkItems[i]!.prefix + checkItems[i]!.number + checkItems[i]!.afterNumber);
    }

    return result;
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
    const result2 = preInterview2(["TH19", "TH3Netflix", "TH1", "TH7"]);
    console.log('Result 2:', result2);
    const result3 = preInterview3('th', ["Mother", "Think", "Worthy", "Apple", "Android"], 2);
    console.log('Result 3:', result3);
    const result5 = preInterview5(4215);
    console.log('Result 5:', result5);
    const result6 = preInterview6([10, 10, 10], 4);
    console.log('Result 6:', result6);
}

main();