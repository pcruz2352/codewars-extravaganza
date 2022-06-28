//smallest Integer

function lowestNumber(arr){

    //check if array is empty
    if(arr.length === 0){
        return 'Your array is empty';
    }

    let lowest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i];
        }
    }
    return lowest;
}

let myArray = [34, 15, 88, 2];
//lowest number = 2

console.log(lowestNumber(myArray));
