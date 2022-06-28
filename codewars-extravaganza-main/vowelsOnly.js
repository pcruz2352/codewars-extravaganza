 function vowels(str) {
     let newStr = ""

     for (let i = 0; i < str.length; i++) {
         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
             newStr = newStr + str[i]
         } else {
             newStr = newStr + ""
         }

     }
     return newStr
 }

 console.log(vowels("Pedor Cruz"))
 console.log(vowels("fluidly"))
 console.log(vowels("kanye west"))