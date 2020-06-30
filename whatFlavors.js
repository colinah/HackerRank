// Hash Tables: Ice Cream Parlor



let whatFlavors = (cost, money) => {
    const map = new Map();
    for (let i = 0; i < cost.length; i++) {
        var target = money - cost[i];
        if (map.has(target)) {
            console.log(map.get(target), i + 1);
            break;
        }
        map.set(cost[i], i + 1);
    }
//     let result = [];
//     let indexes = {}
//     for(let i = 0; i < cost.length; i++){
//         if(indexes[cost[i]]){
//             indexes[cost[i]].push(i);
//         } else {
//             indexes[cost[i]] = [i];
//         }

//     }
//     let costs = cost.sort((a,b)=> a-b)
//     let maxIndex = costs.findIndex(el => el >= money);
//     maxIndex === -1 ? maxIndex = costs.length : null;
//     l1:
//     for(let i = 0; i < maxIndex; i++){
//         console.log('here')
//         for(let j = 0; j < maxIndex; j++){
//             if((costs[i] + costs[j] === money) && i !== j){
//                 let a = 
//                 result = [indexes[costs[i]].shift() + 1,indexes[costs[j]].shift() + 1];
//                 break l1;
//             }
//         }
//     }
//     console.log(result.sort((a,b)=>a-b).join(' '));
//     // return result
// 
}

    let cost = [2,2,3,4];
    let money = 5;
    let res = whatFlavors(cost, money)


