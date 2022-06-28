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