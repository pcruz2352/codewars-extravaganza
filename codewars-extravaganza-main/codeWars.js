//Medium Level

///Multiply///

function multiply(a, b){

    return a * b 
    }
    
    const math = multiply(4, 5)
    console.log(math)


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


///FirstandLast


function removeChar(str) {
    let wordsArray = str.split(" ")
    // wordsArray = wordsArray.splice(1,4);
    wordsArray2 = wordsArray.splice(1, 4);

    return wordsArray;
}

console.log(removeChar("Today has been a good day"))


/////VowelCount


function getCount(str) {
    //let newStr = str.split(",")
    let vowelsCount = 0;
    let newArray = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            newStr = newArray;
            vowelsCount++;
        }
    }

    return vowelsCount;
}


console.log(getCount("a,e,i,o,u"));

////////Hard Level//////

 
 //////Shortest Word
 
 
 function findShort(s) {
    let wordsArray = s.split(" ")
    let newVar = wordsArray[0]
    // console.log(wordsArray);
    for (let i = 0; i < wordsArray.length; i++) {

        if (newVar.length > wordsArray[i].length) { // if the word on shortWord is smaller than the one on wordsArray then replace the value of
            newVar = wordsArray[i]
        }
    }
    return (newVar.length)
}

console.log(findShort("headphones apple bus"))



    //let numArray = numbers.split(" ") // splits one array into 5 different arrays


 ////HighandLow

    function highAndLow(numbers) {
        let numArray = numbers.split(" ") // splits one array into 5 different arrays
        let varHigh = Number(numArray[0])
        let varLow = Number(numArray[0])
   
        for (let i = 0; i < numArray.length; i++) {
   
            if (varHigh < Number(numArray[i])) { // if varHigh is less than the number we are currently on, then replace it
                varHigh = Number(numArray[i])
            } else if (varLow > Number(numArray[i])) { // if varLow is greater than the number we are currently on, then replace it
                varLow = Number(numArray[i])
            }
   
        }
        return String(varHigh + " " + varLow)
    }
   
    console.log(highAndLow("1 2 3 4 5")) // return "5 1"
    console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"
    console.log(highAndLow("1 9 3 4 -5")) // return "9 -5"


     
    
    
////////Very Hard///////

 ///Mumbling
 
 function accum(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr = newStr + str[i].toUpperCase();

        
        for (let n = 0; n < i; n++) {
            newStr = newStr + str[i].toLowerCase();
        }
        if (i === str.length - 1) { 
            newStr = newStr + "" 
        } else {
            newStr = newStr + "-" 
        }
    }
    return newStr;
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

