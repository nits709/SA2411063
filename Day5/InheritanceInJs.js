/*
Inheritence:
Aquaring properties of one class(parent) into another(child) that is called inheritence.
Purpose: 1. avoid code cuplication
        2.  for code reusability
        3. implement runtime polymorphism

        B extends A --->  A is parent and B is child
        Child can access child proerty + parent property also

        1. single, multilevel, hierarchical
*/

class Vehical{


        breakFeature(){
            console.log("Vehical..... break()");
        }

}

class Car  extends Vehical { // multilevel inheritence

        startCar(){
            console.log("car..........start()");
            
        }




        refule(){
            console.log("car..........refule()");
            
        }

        stop(){
            console.log("car..........stop()");
            
        }

}

class BMW extends Car{

autoEngine(){
    console.log("BMW....autoengine()");
    
}

}


class Audi extends Car {

    autoGear(){
        console.log("Audi....autoGear()");
        
    }
    }

    /*
1. parent class ref and parent class object (Car)   

    */

let c1 = new Car();

c1.startCar();
c1.refule();
c1.stop();
//c1.autoEngine();// error
c1.breakFeature();

console.log("-------------------------------------------");

let c2 = new BMW();

c2.startCar();
c2.refule();
c2.stop();
c2.autoEngine();
c2.breakFeature();


console.log("-------------------------------------------");

let c3 = new Audi();

c3.startCar();
c3.refule();
c3.stop();
c3.autoGear()
c3.breakFeature();

console.log("-------------------------------------------");

let c4 = new Vehical();
c4.breakFeature();





