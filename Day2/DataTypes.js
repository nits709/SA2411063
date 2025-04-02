/*There are two type of datatypes in javascripts
    1. primitive  -- pre-defined 
    2. non-primitive -- Object, Array.

    1. primitive
        a. Number
        b. String
        c. Boolean
        d. Null
        e. Undefined
        f. BigInt
        8. Symbol(not required)

     2. Non-primitive - Object - nitin, Mobile, car, motorbike  
                        Array[] -  

      Variables type in js
      1. var, 2. let, 3. const.
      
      
     
*/

 //Number: int/ decimal digit
 let id=1818;
 let marks= 79.99;

console.log("Value of id "+ id);
console.log("datatype of variable called id "+typeof id);
console.log("Value of marks "+ marks);
console.log("datatype of variable called marks "+typeof marks);

/*
String type in JS
1. single quots '';
2. double quoats " ";
3. back tick/ template string in javascripts `nitin`

*/

let studentName = 'Neha';
let Doman = "JavaScripts for tester";
let Description = 'Javascripts is a scripting language';

console.log("studentName is "+ studentName);
console.log("datatype of studentName is "+typeof studentName);

console.log("Doman is "+ Doman);
console.log("datatype of Doman is "+typeof Doman);

console.log("Description is "+ Description);
console.log("datatype of Description is "+typeof Description);

`Javascripts is a scripting language
 Javascripts is a scripting language
 Javascripts is a scripting language
 Javascripts is a scripting language`


let testerName="Mahesh"
    domain = "QA"
    project = "Financial"
    EmpId="330";
    experience= "10";

    //${variableName}

    let information =`QA Name is ${testerName}, and john is having
                total year of ${experience} and his domain ${domain}`

                console.log(information)


                console.log("=========back tick==============")
//Boolean true/false
let flag= true;

console.log(`value of flag is: ${flag}`); // true;
console.log(`dataType of flag is: ${typeof flag}`); //boolean;

console.log("=========legacy==============")
let status= false;

console.log("value of flag is:"+ status); // false;
console.log("dataType of flag is: "+typeof flag); //boolean;


/*
"undefined : variable is declare and if not initialize
by default value and the type will be undefined.
*/

let num;  // user can write variable name i.e declaration.
         // when user put some value against variable i.e initialization.


console.log(`value of variable called num: ${num}`);
console.log(`datatype of variable called num: ${typeof num}`);


//BigInt big Integer Value

//max value of any integer and number type.

console.log(Number.MAX_VALUE) //1.7976931348623157e+308


let bigNum = 21221212121212121212.7878;

console.log(bigNum);
console.log(typeof bigNum);

//symbol --not required.
let newSymbol = Symbol('department');
console.log(newSymbol)
console.log(typeof newSymbol)

//Non_primitive
//Object 1. object literal - fixed

let person={
    id:101,
    pName:"John",
    pEmailID:"john@gmail.com",
    MobileNo:3333222222
}

console.log(person);
console.log(typeof person);

console.log("person ID is "+ person.id);
console.log("person ID is "+ person.pName);
console.log("person ID is "+ person.pEmailID);
console.log("person ID is "+ person.MobileNo);
