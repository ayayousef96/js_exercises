
/*2.1 => Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.*/

function Sum_of_lowest_numbers(arr){
    let min_sum=arr[0]+arr[1];
    for(let i=0; i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(min_sum> arr[i]+arr[j]){
                min_sum= arr[i]+arr[j];
            }
        }
    }
    return min_sum;
}
///console.log(Sum_of_lowest_numbers([2,17,8,11,5]));

/*2.2 => Given an array of ones and zeroes, convert the equivalent binary value to an integer */
function binary_to_integer(arr){
    let l=arr.length;
    let result=0;
    for(i=0;i<l;i++){
        if(arr[i] == 1){
            result += Math.pow(2,l-i-1);
        }
    }
    return result;
}
//console.log(binary_to_integer([0,0,1,1]));

/*2.3 => Complete the findNextSquare method that finds the next integral perfect square after the one
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the
parameter is positive. */

function findNextSquare(input){
    if(Number.isInteger(Math.sqrt(input))){
        return Math.pow(Math.sqrt(input)+1,2);

    }
    else{
        return -1;
    }
}
//console.log(findNextSquare(100));

/*2.4 =>There is an array with some numbers. All numbers are equal except for one. Try to find it! */
function findUniq(arr){
    /*in case arr[0] is uniq */
    if(arr[0]!= arr[1] && arr[1]==arr[2]){
        return arr[0];
    }
    /*in case arr[arr.length-1] is uniq */
    if(arr[arr.length-1] != arr[arr.length -2] && arr[arr.length -2]==arr[arr.length -3]){
        return arr[arr.length -1];
    }

    for(i=1;i<arr.length-1;i++){
        if(arr[i]!= arr[i-1] && arr[i]!= arr[i+1]){
            return arr[i];
        }
    }

}

//console.log(findUniq([0,0,5,0,0]));

/*2.5 => Write a program that finds the summation of every number from 1 to num. The number will
always be a positive integer greater than 0. */
function summation(num){
    let result=num;
    for(i=0;i<num;i++){
        result+=i;
        
    }
    return result;
}
///console.log(summation(3));

/*2.6 => The first century spans from the year 1 up to and including the year 100, The second - from the
year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in. */

function centuryFromYear(y){
    if(y%100 == 0){
        return y/100;
    }
    else{
        return parseInt((num/100)+1);
    }

}
/*2.7 => Your task is to create a function that does four basic .
The function should take three arguments - operation(string/char), value1(number),
value2(number).
The function should return result of numbers after applying the chosen operation.
Examples */
function basicOp(op ,a , b){
    switch (op){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;

    }
   
}
//console.log(basicOp("*",5,5));