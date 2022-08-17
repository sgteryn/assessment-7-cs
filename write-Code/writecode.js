//1). Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function sumZero(numbersArray) {
    for(let i = 0; i < numbersArray.length ; i++) {
    for (let j = 1 < numbersArray.length; j++); {
    if (numberaArray[i] + numbersArray[j]) === 0{
    return true 
    } } else 
    return false
}}


//2.) Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function uniqueChar (SingleWord) {
   let SingleWord = SingleWord.tolowercase().split('').sort()
   for(let i = 1; i < SingleWord.length;i++){
    if(SingleWord[i-1] !== SingleWord[i]){
         return true
    } else 
    return false
   }   
}



//3.) A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.

function pangramSentence() {

}

//4.) Write a function, find_longest_word, that takes a list of words and returns the length of the longest one

function findLongestWord(listOfWords) {
    let wordLength = 0;
    for( let i = 0; i < listOfWords.length;i++){
        if(listOfWords[i].length > wordLength){
            wordLength = listOfWords[i].length
        } 
    }
    return wordLength
}