

function twoNumber(arr, target){
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        let diff = target - arr[i];
        if(obj[diff]){
            return [diff, arr[i]]
        }else {
            obj[arr[i]] = true
        }
    }
}

let arr = [2,7,11,15]
let target = 9
console.log(twoNumber(arr, target))