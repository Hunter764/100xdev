// let array = ["Abhi" ,1 , 3, "Ada"];
// array.pop();
// console.log("array after pop: ", array );



// let marks = [23, 45, 99, 56, 30];
// let n = marks.length; 
// let count = 0;

// for (let i = 0; i < n; i++) {
//     count += marks[i];
// }

// let avg = count / n;
// console.log("Average marks of the class: ", avg);


//find the minimum  in array

// let marks = [23, 45, 99, 56, 30];
// let n = marks.length;
// let max = marks[0];

// for(let i=0 ;i<n; i++){
//     if(marks[i]<max){
//         max = marks[i];
//     }
// }
// console.log("Minimum marks of the class: ", max);  


// function shiftExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.shift();
    
//     console.log("After shift:", arr);
//   }
//   shiftExample([1, 2, 3]);



//   function concatExample(arr1, arr2) {
//     console.log("Original Arrays:", arr1, arr2);
  
//     let arr3 = arr1.concat(arr2);
//     console.log("After concat:", arr3);
//   }
//   concatExample([1, 2, 3], [4, 5, 6]);


// let array = ["Abhi" ,1 , 3, "Ada"];
// console.log(array.lastIndexOf(3))


// let arr = ['Hello','World'];
// let str = arr.join('');
// console.log(str);

let arr = [1,2,3,4,56];
// console.log(arr.slice(2,5));
// arr.forEach(Element => console.log(Element));
// for(let i=0; i<arr.length; i++){
//     arr[i] *= 2;
// }

let d = arr.map(x => x*2);
console.log(d);
