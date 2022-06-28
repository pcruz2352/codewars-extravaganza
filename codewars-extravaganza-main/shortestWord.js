 
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
