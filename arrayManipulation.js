function arrayManipulation(n, queries) {
    let arr = [];
    arr.length = n * 2;
    arr.fill(0);
    let max = 0;

    queries.forEach((el) => {
        arr[el[0]] += el[2];
        arr[el[1]+ 1] -= el[2];
    });

    arr.reduce((prev, cur) => {
        const sum = prev + cur;
        if (sum > max) max = sum;
        return sum;
    })

    return max;
}

let n = 5, queries = [[1,5,100],[2,3,100]];
console.log('arrmanipulation',arrayManipulation(n, queries));