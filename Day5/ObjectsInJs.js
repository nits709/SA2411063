
/*
//Object is key and value pair information in javascripts

//how many way are there to create an object in javascripts
1.  Object literal 
2. Using class level
3. using constructor function.
4. Object.Create():
*/


// object literal

// let Person={
//         id:101,
//         name:"methew",
//         job:"QA"
// }

// console.log(Person); // print the complete value of the object.
// console.log("person datatype is : "+typeof Person);


console.log("-----Constructor function based object-----");

function Emp(id,fname,subject){
        this.id=id;
        this.fname=fname;
        this.subject=subject;

        this.print=function(){ // scope has changed / this
            console.log("id :"+ this.id + "fname "+ this.fname + "subject "+ this.subject);
            }
}


//for constructor function object creation
let s1 = new Emp(101,"venkatesh","Security Domain");
s1.print();


//Test is an Object prototype  // creating type of object literal
let Test={
    subject:"testing",
    marks:100
}

        console.log(Test.marks);
        console.log(Test.subject);
        
    console.log("------------------------------------object creation-------------");
    
        let l1 = Object.create(Test)
        console.log(l1.subject);
        console.log(l1.marks);
        
