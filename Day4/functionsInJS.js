// 1. Function declaration and function expression 


console.log("---- function declaration");
// function without parameter
// function implementation
 function test1(){ //this is without parameter
    console.log("today we learn functions in javascripts");
 }

 //call 
 test1();

 function test2(testData){ //variable/parameter this fun is with parameter
    console.log("data coming......"+ testData);
 }

//call
test2("passing testdata to function 2") // argument.


let f  = function(id,name){
 console.log("get the value of ID "+ id );
 console.log("get the value of name "+ name);
 
}

//call the function
f(101,"John");


let test4 =function(id,name){
    return ` Employee id is : ${id} and Employee name is: ${name}`;
}

//call
console.log(test4(201,"sachin"));


console.log("------arrow function--------");

    let add = (num1,num2)=>{
            console.log("Addition is:"+ (num1+num2));
        }

        //calling arrow function
        add(100,200);

        //callback.

