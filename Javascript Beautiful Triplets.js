 function beautifulTriplets(d, arr) {
    // Write your code here


let count = 0;


for(let i=0;i<arr.length-2;i++){
    if(arr.indexOf(arr[i]+d)>0 && arr.indexOf(arr[i]+2*d)>0)
        count++;
    }
    return count


}
