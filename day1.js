/*
1.calculate the sum of 2 numbers 

const a=2;
const b=4;
function sum2numbers(a,b){
    return a+b;
}
const summing=sum2numbers(a,b)
console.log(summing)


2.Maximum number in an array

const arr=[1,2,3,4,7,6];
function findMax(arr){
    return Math.max(...arr);
}
const max_arr=findMax(arr)
console.log(max_arr)


3.Given number is Palindrome or not 

const input="reverse";
function isPalindrome(input){
    return input===input.split("").reverse().join("");
}
const Palindrome=isPalindrome(input);
console.log(Palindrome)


4.Even numbers in arr

const arr=[1,2,3,4,5,6,7,8,9];
function evenNumbers(arr){
    return arr.filter(eachnum=>eachnum%2===0);
}
const evenNumberArr=evenNumbers(arr);
console.log(evenNumberArr)


5. Factorial of the givenNumber

const num=3;
function factorial(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result=result*i;
    }
    return result
}
console.log(factorial(num));


6.Given number is Prime or not 

function isPrime(num){
    if(num<=1){
        return "Not a Prime"
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return "Not a prime"
        }
    }
    return "Prime"
}
console.log(isPrime(7))


7.Fibonacci Sequence 

function fibonacci(number){
    if(number<=1){
        return number
    }
    let a=0;
    let b=1;
    for (let i=2;i<=number;i++){
        let c=a+b;
        a=b;
        b=c 
    }
    return b  
}
console.log(fibonacci(5))


8.Armstrong Number 

function Armstrong(num){
    const num_into_str=num.toString();
    const length=num_into_str.length;

    let sum=0;
    for(let i=0;i<length;i++){
        const digit=parseInt(num_into_str[i],10);
        sum=sum+Math.pow(digit,length)
    }
    return sum===num;
}
console.log(Armstrong(153))

*/