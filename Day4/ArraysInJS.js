/*
Javascripts - Array is collection of data with same datatype 
array has multiple methods in javascripts.

let arr=[10,20,30,40,50,60]

*/

let arr=[10,20,30,40,50,60]

// //console.log(arr); // exception 
// console.log(" size of an array" + arr.length); // this function would return the size of an array

// //to get the specific value of an array user need to index

// console.log(arr[3]);  //40
// console.log("for wrong array index : "+ arr[10]); //undefined

// for(let i=0;i<arr.length;i++){
    
    
//     console.log("the value of " + i + "and  array : "+ arr[i]);
    

// }
//         console.log("iterations of using for loop in array");
//         /*
//             for... of loops iteration overs aaray value
//             for... in loops iterates over index

//         */
        
//             for(let e of arr){
//                 console.log(e); // this print value of an arr object
              
//             }

//             for(let e in arr){
//                 console.log(e); // this returns the index of array object
//             }


//             for(let e in arr){
//                 console.log("At index: "+ e + "value is "+ arr[e]);
//             }

// console.log("------array method----------");

// // to add new element in array push() and unshift();

// let color = ["red","pink","orange"];
// console.log(color);

// color.push("white") // appends new element to the end of an array and return the new length of the array
// console.log(color);  // unshift // shift does the same ooperation as push() H.W

// // to remove the element from array and retur the new array length.
// //pop and sift function would help to remove the element from an array

// color.pop();

// console.log(color);

// indexOf:Returns the index of the first ocuurrence of a value in an array,  or -1 if it is not present.
let fName= ["John", "Steve", "Waseem","Sachin","Steve"];
//           0        1         2       3        4

// console.log(fName);

// let fIndex = fName.indexOf("Waseem"); //2
// console.log("Waseem index  is "+ fIndex);

let fIndex1 = fName.indexOf("Steve"); //1
console.log("first occurance of steve "+ fIndex1);


// get the index of next steve =4 
let fIndex2 = fName.indexOf("Steve",2)  // 4
console.log("second occurance of steve "+ fIndex2);





























