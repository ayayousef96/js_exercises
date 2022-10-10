/*5.1 => create a function that removes the first and last
characters of a string. You're given one parameter, the original string. You don't have to worry
with strings with less than two characters.*/
function trimming_string(st){
    return st.slice(1,-1);
}
//console.log(trimming_string("star"));
/*5.2 =>  Write a function called repeat_str which repeats the given string src exactly count times.*/

function repeat_str(str, n) {
    let repeatedString = "";
    while (n > 0) { 
      repeatedString += str; 
      n--; 
    }
    return repeatedString;
}

/*5.3 => Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
function toCamelCase(str){
    let n=str.length;
    let i=0;
    while(i<n){
        if(str[i]=="_" || str[i]=="-"){
            str=setCharAt(str,i,"");
            let ch=str[i].toUpperCase();
            str=setCharAt(str,i,ch);
            
        }
        i++;
    }
    return str;

}
//console.log(toCamelCase("Aya_yousef-maghar"));
/**5.4 => Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
string with all even indexed characters in each word upper cased, and all odd indexed
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
be present if there are multiple words. Words will be separated by a single space(' '). */

function toWeirdCase(str){
    
    const words = str.split(" ");
    let l =words.length;
    let result='';
    for(let i=0;i<l;i++){
        let word=words[i];
        for(let j=0;j<word.length; j+=2){
            let ch=word[j].toUpperCase();
            word=setCharAt(word,j,ch);
        }
        for(let m=1;m<word.length; m+=2){
            let ch2=word[m].toLowerCase();
            word=setCharAt(word,m,ch2);
        }
        result = result +word +" ";
       
    }
    return result;

}
//console.log(toWeirdCase("Weird string case"));

/*5.5 => Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
 */
function shortName(Name){
    let result=Name[0].toUpperCase()+".";
    let ch='';
    for(i=0;i<Name.length;i++){
        if(Name[i]==' '){
            ch=Name[i+1];
        }
    }
    result= result+ch.toUpperCase();
    return result;
}
//console.log(shortName("aYA yousef"));

/**5.6 =>Usually when you buy something, you're asked whether your credit card number, phone number
or answer to your most secret question is still correct. However, since someone could look over
your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'. */
function maskify(str){
    for(i=0;i<str.length-4;i++){
        str =setCharAt(str,i,"#");
    }
    return str;
}
//console.log(maskify("ascvmhjkfrety"));


/*5.7=> Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
 */
function shortest_word(str){
    const words=str.split(" ");
    let m=words[0].length;
    for(i=0;i<words.length;i++){
        if(words[i].length < m ){
            m=words[i].length;
        }
    }
    return m;
}
//console.log(shortest_word("Aya yousef ay"));