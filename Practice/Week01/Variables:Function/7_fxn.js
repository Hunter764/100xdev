/* 
-> Functions 
```So anything that takes an input as a few arguements as input does some magic on top of it and then return the values called a function '''
    ```You can think ChatGpt as fnx which takes some prompt and do some magic on it and gives you  an output```
    ```It do things Domain specific```
   1.Abstract out logic in your program
   2. Reduce code duplication
   3.Take arguement as an output
   4.You can think of them as an independent program that is supposed to do something given an input
   5. You can call them multiple times in your program  
   6.Function can take other functions as input - this will confuse you (callbacks)


*/

//1.Write a fnx that finds sum of two numbers

function sum(a,b){
    //do things with the input and return an output
    const sumValue = a + b;
    return sumValue;
}
const value = sum(1,2)
console.log(value)  //3

//code flow ->  18->23->20->21->24