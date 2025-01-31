//Write a program to print th biggest number in an array;

const num = [23,1 ,12, 31 , 13, 313 ,12 ,3414]

let max = num[0];
for(let i=0; i<num.length; i++){
    if(num[i]>max){
        max = num[i];
    }
}
console.log(max) //3414