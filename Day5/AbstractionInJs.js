

function Employee(id, fname, basicSal){
    this.id=id;
    this.fname=fname;
    this.basicSal=basicSal;
    //this.bonus=10000;
    let bonus = 10000;

    // this.calculationBonus=function(){
    //             finalSal=this.basicSal+this.bonus;
    //             console.log("Including bonus amout is "+ finalSal);
                
    // }

    let calculationBonus=function(){
        finalSal=basicSal+bonus;
        console.log("Including bonus amout is "+ finalSal);
        
}

        this.display=function(){
            console.log(this.id + " : " + fname);
            calculationBonus();
            
        }

}

let e1 = new Employee(101,"John",20000);

// e1.calculationBonus();
e1.display();
// e1.bonus=40000;
// e1.calculationBonus();
