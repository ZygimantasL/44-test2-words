console.clear();
console.log('hello');
const input = '180746549727101017874196518875232047743432358934591344052726108044076210958682951185960373293510161321384713742239284658262905297610045642584724210482838706558';
let length = input.length/2;
let arr =[];
let most = 0;
let hm =0;

for (i=0; i<input.length; i++){
    arr.push(input[i]+input[i+1]);
}
console.log(arr.sort());

for (i=0; i< arr.length; i++){
    let most= arr[i];
    if (hm === most){
        hm++;
    console.log (most, hm);
    }

}
console.log(arr);
