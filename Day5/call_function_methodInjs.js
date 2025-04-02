// function : group of statement  which consist of line of code variables, loops. conditions inorder to achieve certains objects
//Method: IS directly/indirectly is function only but which belongs to an object.

class Emp{

 
    //constructor
        constructor(id,eName){
            this.id=id;
            this.eName=eName;

        }
        


    // in javascripts by using this keyword local variable scope become global and can access across the class.
    //method which belongs to an object directly.
    // setEmpyName(id,name){
    //         console.log("employee name to set......");
    //         this.id=id; // local
    //         this.eName=name;// local
            
    // }

    getData(){
        console.log("getting the ID "+ this.id + " eName " + this.eName);
        
    }
}

//object creation.
let e1 = new Emp(501,"Sachin");
//e1.setEmpyName(201,"Sneha");  // parameterize method.
e1.getData();



let s1 = new Emp(101,"ketaki"); // class level
//s1.setEmpyName("401","John"); // parameterize method.
s1.getData();

let r1 = new Emp(); //class level


//oops concepts
// 1. Encapsulation
// 2 . Inheritence
//3. Polymorphisms
//4 . abstractions.

