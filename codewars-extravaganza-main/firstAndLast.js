 function removeChar(str) {
     let wordsArray = str.split(" ")
     // wordsArray = wordsArray.splice(1,4);
     wordsArray2 = wordsArray.splice(1, 4);

     return wordsArray;
 }

 console.log(removeChar("Today has been a good day"))