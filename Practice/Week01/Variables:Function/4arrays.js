//Write a program that prints all the even numbers in an array

const num = [12, 34, 13 , 7, 47, 25 ];

for(let i=0 ; i<num.length; i++){
    if(num[i]%2 == 0){
        console.log(num[i]);
    }
}
//output:-12 34