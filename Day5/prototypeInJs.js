
/*
Prototye is an object to object or functions
We can create reusable method or property using prototype

*/


function EmployeeData(id,name){
    this.id= id;
    this.name= name;
}


// Design new property which is common for all object---> prototype
EmployeeData.prototype.langague = "Javascripts";

let e1 = new EmployeeData(101,"Sachin");
//e1.langague = "javascripts";
console.log("id "+ e1.id + " : " + e1.name + " : " + e1.langague);

let e2 = new  EmployeeData(201,"Abhi");
console.log("id "+ e2.id + " : " + e2.name + " : " + e2.langague);


console.log("----------reusable method------------");

//string scenario
let data = "Nitin123         ";
console.log("size of string "+ data.length); // 17

// only character length
console.log("characterlength is : "+ data.trim().length); //8


// i want to design new function which give us a true length of string
String.prototype.trueLength = function(){
                        return this.trim().length;
                    }

console.log("True length for string is : "+ data.trueLength());
        











