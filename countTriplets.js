// Create function to return the total number of "triplets" in an arr.
// Triples are an arr [i,j,k] where i < j < k
//Loop through arr checking for triplets, nested loop with break two check 
function countTriplets(arr, r) {
    let count = 0;
    l1: for(let i = 0; i < arr.length - 3;i++){
        let triplet = []
        let condition = false
        l2: for(let j = i; j < arr.length - 3; j++) {
            
        }
    }


}

(()=>{
    let arr = [1,4,4,16,64];
    let r = 0;
    console.log('coutTriplets: ', countTriplets(arr,r))
})