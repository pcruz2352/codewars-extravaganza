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