// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    if (x > y) {
        return x
    }
    else {
        return y
    }
    //...
}

//corrected

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){

    var numbers = [x, y, z];
    var sorted = numbers.sort();
    return sorted[2];
}

//added semi colons

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var lettr = char
    if (char === 'a' || char === 'e '|| char === 'i' || char === 'o' || char === 'u'){
        return "true"
    } else {
        return "false"
    }

}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var this = phrase.split("");
    var ttAy=[];
    this.forEach(function(x){
        if (x==='a' || x==='e' || x==='i' || x==='o' || x==='u'){
            ttAy.push(x);
        }
        else {
            ttAy.push(x+x+x);
        }
    }
    return ttAy.join('');

}

// updated
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies
// (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(thesum){
    var number = thesum.reduce(function(a,b){
        return a + b;

});
return number;
}
//
function multiply(mult){
var number = mult.reduce(function(a,b){
        return a * b;

});
return number;
}

//updated
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example,
//reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(y){
    return y.split('').reverse().join('');

}



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns
//the length of the longest one.
// ---------------------

function findLongestWord(words){
    var long=words.sort(function(a,b){
        return b.length})
    return long;
    }
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and
//returns the array of words that are longer than i.
// ---------------------


function findLongestWord(words){
    var long=words.sort(function(a,b)
     {
        return b.length;
     });
    return long;

}


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var chars=string.split('');
    var charList= {};
    char.forEach(function(char){

    if (charList[char])===undefined) {
      charlist[char] = 1;
  } else {
    charList[char] = charList[char] + 1;
}
    });
    return charlist;
    //... From class 5/18
}
