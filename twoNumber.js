

function twoNumber(arr, target){
    //create an object to keep track of the number whose differnce is present in the array
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        //loop through each element and find the difference between the target and the element
        let diff = target - arr[i];
        if(obj[diff]){
            //if the difference is present in the object, return the two numbers
            return [diff, arr[i]]
        }else {
            //if the difference is not present in the object, add it to the object
            obj[arr[i]] = true
        }
    }
}

console.log(twoNumber([2,7,11,15], 9))