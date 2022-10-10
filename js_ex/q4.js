/*q4 => “Write a function to return an n element in Fibonacci sequence”  */

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


/*ex 4.2 => Well met with Fibonacci bigger brother, AKA Tribonacci.
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
(instead of 2) numbers of the sequence to generate the next.  */
function Tribonacci(n,arr){
    let result=new Array(n);
    if(n==0){
        return [];
    }
    result[0]=arr[0];
    result[1]=arr[1];
    result[2]=arr[2];
    for(let i=3;i<n;i++){
        result[i]=result[i-1]+result[i-2]+result[i-3];
    }
    return result;

    
}
//console.log(Tribonacci(6,[1,1,1]));