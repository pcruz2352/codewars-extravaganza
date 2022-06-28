function dissemvowel(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        let lower = str[i].toLowerCase()
        if (lower !== "a" &&
            lower !== "e" &&
            lower !== "i" &&
            lower !== "o" &&
            lower !== "u") {
            // adds character if it is NOT a vowel
            newStr = newStr + str[i]
        }

    }
    return newStr;
}

console.log(dissemvowel("Tesla's are the new punch buggies!"))
/* 

- if statement to check for vowels
- define the vowels for the if statements
- newStr: set as empty string, by the end of problem should be equal to string without vowels

- for loop to go through string 1 at a time

*/