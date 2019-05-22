// Origional challenge at https://www.hackerrank.com/challenges/countingsort4/problem

// Complete the countSort function below.
function countSort(arr) {
    // // // Replace first half of letters with a dash
    // const half = Math.floor(arr.length/2) - 1
    // // Set up array
    // const values = arr.map(a => a[0]);
    // const max = Math.max(...arr.map(a => a[0]))
    // const ans = Array.from(Array(max+1)).map(()=> [])

    // //Map into new array
    // let str = '-';
    // for(let i = 0; i < arr.length; i++){
    //     if(i > half){
    //         str = arr[i][1];
    //     }
    //     ans[arr[i][0]].push(str);
    // }
    // let string = [].concat(...ans).join(' ');

    // console.log(string)
    let ans = [];
        let half = (Math.floor(arr.length) / 2) - 1;

        for (let i = 0; i < arr.length; i++) {
            if (!(typeof ans[arr[i][0]] === 'string')) {
                ans[arr[i][0]] = '';
             }
            ans[arr[i][0]] += (i <= half ? '- ' : arr[i][1] + ' ');
        }

        console.log(ans.join(''))
    }
// testing
(()=>{
    let arr = [ [ '0', 'ab' ],
    [ '6', 'cd' ],
    [ '0', 'ef' ],
    [ '6', 'gh' ],
    [ '4', 'ij' ],
    [ '0', 'ab' ],
    [ '6', 'cd' ],
    [ '0', 'ef' ],
    [ '6', 'gh' ],
    [ '0', 'ij' ],
    [ '4', 'that' ],
    [ '3', 'be' ],
    [ '0', 'to' ],
    [ '1', 'be' ],
    [ '5', 'question' ],
    [ '1', 'or' ],
    [ '2', 'not' ],
    [ '4', 'is' ],
    [ '2', 'to' ],
    [ '4', 'the' ] ]
    console.time('time');
    countSort(arr)
    console.timeEnd('time');
})()

// Passing Solution
// let list = [];

//     let maxHalf = (Math.floor(arr.length) / 2) - 1;

//     for (let i = 0; i < arr.length; i++) {
//         if (!(typeof list[arr[i][0]] === 'string')) {
//             list[arr[i][0]] = '';
//         }
//         list[arr[i][0]] += (i <= maxHalf ? '- ' : arr[i][1] + ' ');
//     }

//     let string = '';
//     for (let row = 0; row < list.length; row++) {
//         if (list[row]) {
//             string += list[row];
//         }
//     }

//     console.log(string);