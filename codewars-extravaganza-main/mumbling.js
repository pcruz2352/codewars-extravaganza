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

 