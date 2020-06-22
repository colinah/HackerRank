// Create function to return the total number of "triplets" in an arr.
// Triples are an arr [i,j,k] where i < j < k
//Loop through arr checking for triplets, nested loop with break two check 
function countTriplets(arr, r) {
    let t2 = {};
    let t3 = {};
    let result = 0;
    for(let i in arr ){
        result += (t3[arr[i]] || 0);
        console.log('result: ',result)
        if (t2[arr[i]]){
            console.log('here')
            t3[arr[i]*r] = (t3[arr[i]*r] || 0) + t2[arr[i]];
        }
        t2[arr[i]] = (t2[arr[i]*r] || 0) + 1;
        console.log('t3: ' , t3 , ' t2: ' , t2)
        console.log('i: ' , arr[i])
    }   
    return result + 1;

}
// static long countTriplets(List<Long> arr, long r) {
// 	Map<Long, Long> t2 = new HashMap<>();
// 	Map<Long, Long> t3 = new HashMap<>();
// 	long result = 0L;
        
// 	for(Long a : arr) {
// 		result += t3.getOrDefault(a, 0L);
// 		if (t2.containsKey(a)){
// 			t3.put(a*r, t3.getOrDefault(a*r, 0L) + t2.get(a));
// 		}
// 		t2.put(a*r, t2.getOrDefault(a*r, 0L) + 1);
// 	}
// 	return result;
// }
(()=>{
    let arr = [1,5,5,25,125];
    let r = 2;
    console.log('coutTriplets: ', countTriplets(arr,r))
})()