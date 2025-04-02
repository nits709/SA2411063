//Arithmetic Operator +,-,*,%,/
let a =100; b =150;

console.log("Addition of "+ (a+b));

console.log(`Substraction of: ${a-b}`);
console.log(`Multiplication of: ${a*b}`);
console.log(`Division of: ${a/b}`);
console.log(`Modul of: ${a%b}`);

console.log(90/0);  //Arithmetic exception in java 90/0  | Infinity

console.log(-90/0); // -Infinity


console.log("hi"/0); //Nan Not a number

console.log(0/0); //Nan



//String + (concatenation)
console.log("10"+ 10); // 1010


console.log("ten"+ 10);


/*

increment and decrement
a=10;
a++; post increment  -> first value assign then incrment to be done
++a; pre increment -> increment to be done then value assigne to variable.

b=20;  | b-- : post decrement | --b pre decrement

*/

// let a1=100;
// console.log(a1); // 100
// console.log(a1++); // 100  post incrment
// console.log(a1); // 101

// let b1=200;
// console.log(b1) //200
// console.log(++b1); // 201


// let c = 189;
// console.log(c)  // 189
// let d = c++;

// console.log(c) //190
// d=c;
// console.log(d)//189


//post decrement
let m = 190;
console.log(m);  // 190

// let n=m--;

// console.log(m); //189
// console.log(n); // 190


let n=--m;

console.log(m); //189
console.log(n); // 189


/*relation Operator
< less than
<= less than equal to
> greater than
>= greater than
!= not equal to

Equality  - 1. Strict equality 2. loose equality
strict equality does --> helps to check the value and its datatype. | ===
loose equality does --> checks the value are equal or not.  | ==
test data 
*/

let x= 400;
let y = 450;
let i = 400;

console.log(x>y);//false
console.log(x>=y);//false
console.log(x<=y)//true
console.log(x!=y)//true
console.log(x==i)// true

// loose equality
console.log("10" == 10); // true

console.log("10" === 10); //false


//false holds 0 value and true holds 1 , null= 0;

console.log(false+1);// 1
console.log(true+1);// 2
console.log(null+1);// 1

console.log(true+true);// 2


console.log(true+false);// 1
console.log(""+100);// 100














