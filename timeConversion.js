function timeConversion(s) {
    let hour = Number(s.slice(0,2));
    let min = s.slice(3,5);
    let sec = s.slice (6,8);
    let string = s.slice(8,10)
    if(string === 'PM' && hour !== 12){
        hour += 12
    } else if(string === 'AM' && hour === 12){
        hour -= 12;
    }
console.log('hour: ' ,hour ,' min: ', min, ' sec: ' , sec , ' string: ', string)
// console.log(s)
return [hour,min,sec].join(':')

}
(()=>{
    let s = '12:05:45AM';
    console.log('timeConversion: ' , timeConversion(s))
})()