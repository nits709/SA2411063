/*
Polymorphism : is one thing we can reuse in multiple form
purpse : code reusebility

Types:
======================================
1. Compile time - (Method overloading, static)
2. Runtime - (Method over riding)


Rule
========
1. Method Overloading (Compile time poly) not possbile to achieve in JS
2. Method Overriding (Runtime) is possible.

*/

// class Test{


//     display(){
//         console.log("Disply 1 ------ Hello");
        
//     }

//     display(fname){
//         console.log("Display 2-----------fname "+ fname);
        
//     }

//     display(fname,id){
//         console.log("Display 3-----------fname "+ fname);
        
//     }


// }

// console.log("-------Method over loading (not possible)-----------");

// let d1 = new Test();

// d1.display();

console.log("---------Method Overriding-------");

class Fruit{
    
    eat(){
        console.log("Enjoy Fruit");
    }
}

class Orange extends Fruit{
    eat(){

        console.log("Enjoy Orange Fruit.......");
        
    }
}

let f1 = new Fruit();
f1.eat();


let f2 =new Orange();
f2.eat();  // Enjoy Orange Fruit