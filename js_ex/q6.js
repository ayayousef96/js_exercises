/*6.1*/
/*help function*/
function repeat_c(c, n) {
    let repeatedcing = "";
    while (n > 0) { 
      repeatedcing += c; 
      n--; 
    }
    return repeatedcing;
}

function accum(st){
    result='';
    for(i=0;i<st.length-1;i++){
        let u=st[i].toUpperCase();
        let l=st[i].toLowerCase();
        result = result + u + repeat_c(l,i) +'-';
    }
    let n=st.length-1;
    result = result + st[n].toUpperCase() + repeat_c(st[n].toLowerCase(),n);
    return result;

}
//console.log(accum("asDCf"));

/*6.2 => */
function duplicateCount(text){
    let result = 0,characters = {};
    text.toLowerCase().split('').map(c => {
        if (!characters.hasOwnProperty(c)) {
          characters[c] = 0;
        }
        else {
          if (characters[c] === 0) {
            result += 1;
          }
          characters[c] = characters[c] + 1;
        }
    });
    return result;
  }

/**6.3 */
/**help function */
function Unique(value, index, self) { 
    return self.indexOf(value) === index;
}

function longest(s1, s2) {
    return (s1 + s2).split('').filter(Unique).sort().join('')
}
//let a = "xyaabbbccccdefww"
//let b = "xxxxyyyyabklmopq"
//console.log(longest(a, b));

/**6.4 => An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case*/
function isogram(str){
    let word=str.toLowerCase();
    for(let i=0;i<word.length;i++){
        for(let j=i+1;j<word.length;j++){
            if(word[i]==word[j]){
                return false;
            }
        }
    }
    return true;
}
//console.log(isogram("asdgjklo"));

