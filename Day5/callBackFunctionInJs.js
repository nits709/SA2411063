// //what is call back function/What is higher order function in javacripts
// //callback or high order function is same one of same name


// function echoString(){
//     console.log("today we are learning call back function ");
    
// }

// // //call the function.
// // echoString();


// function getResource(fname,callbackfun){
//     console.log(" the resource name is "+ fname);
//     callbackfun();
// }

//  getResource("Rohit",echoString);

// // //signature of callback
// // function reusableFun(callback){
// //          callback("Nitin");   
// // }


// // reusableFun(getResource)


// function greet(name,callbackfun){
//     console.log("Hello "+ name);
//     callbackfun();
    
// }

// function display(){
//     console.log("Welcome to learn call back fucntion");
    
// }

//greet("Javascripts",display);


function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function calculation(a,b,fun){
    let result = fun(a,b);
    console.log("result "+ result);
    
}

calculation(10,20,mul);

calculation(10,20,add);

calculation(10,20,sub);

calculation(10,20,div);