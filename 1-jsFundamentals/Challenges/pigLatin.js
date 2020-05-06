function consonant(word){
    const vowel = 'AEIOU';
    let correctWord = word.toUpperCase();
    let consoWord;
for(let words = 0; words < correctWord.length; words++){
    for(let check = 0; check < vowel.length; check++){
        if(correctWord[words] == vowel[check] && words == 0){
            word += "ay"
            check = vowel.length;
            words = correctWord.length;
        }
        else if(correctWord[words] == vowel[check] && words >= 1){
            consoWord = correctWord[words-1];
            word += consoWord;
            let len = word.length;
            let preWord = word.slice(0,words-1);
            correctWord = word.slice(words,len);
            word = preWord+correctWord+'ay';
            check = check = vowel.length;
            words = correctWord.length;
        }
    }
}
let returnValue = word;
return returnValue;
}
function moreWords (word){
let returnValue ="";
let emptyArray = new Array();
word = word.split(" ");
for(let i = 0; i < word.length; i++){
    returnValue += consonant(word[i])+" ";
}
return returnValue;
}
let x = moreWords("heelo your school");
console.log(x);
