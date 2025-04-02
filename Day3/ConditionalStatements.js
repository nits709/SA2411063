
/*

1. Simple if(true)
2. If-else (true/false)
3. Ladder If(Multiple if conditions)
4. Nested If(Multiple If condition)
5. Switch case

*/

// console.log("---Simple if condition");


// let year=2025;

// if(year===2025){ // 1 = true
    
//     console.log("true: the year is "+year);
    
// }

// year=2025;

// if(year===2025){ // 1 = true
    
//     console.log("true: the year is "+year);
    
// }else{
//     console.log("false: current year is not"+ year);
    
// }


// let age=30;

// if(age>=18){
//     console.log("true:User is Adult and he/she can vote!");
    
// }else{

//     console.log("false : user is teanager and he/she cannot vote");
    
// }

// console.log("---------ladder if----------- ");


// let num = 10;
// if(num>200){
//     console.log("num is positive");
    
// }else if(num<100){
//     console.log("num is negitive");
    
// }else {
//     console.log("num is invalid ");
    
// }

// console.log("---------Nested If-----------");

// //one if condition into other if condition is called nested if 

// //marks are greater equal than 90 --- A
// //marks are greater equal than 95 --- A++
// //otherwise grade should be B

// let marks = 60;

// if(marks>=90){
     
//     if(marks>=95){
//         console.log("A++");
        
//     }else{
//         console.log("A")
//     }
// }else{

//     console.log("B");
    
// }


//switch
// traffic scenario key=value
//break statement will exist from loop and switch body

let color="White";

switch(color){

    case "red":
        console.log("STOP");
    break;

    case "yellow":
        console.log("Ready");
    break;

    case "green":
        console.log("GO");
    break;
    
    default:
        console.log("wrong color | please enter any option from red, green,yellow");
        break;

}



















