/*Encapsulation is process of wrapping data and functions together
purpose = data hiding
*/

class Employee{


        constructor(){

            //local and private
            let id;
            let fname;
        }

        //geters and seter s methos to access this private data.

        setId(id){

            this.id=id;

        }

        getId(){
            return this.id;

        }

        setFname(fname){

            this.fname=fname;

        }

        getFname(){
            return this.fname;

        }

        //access members od class using object

}

let e1 = new Employee();
e1.setId(1985);
e1.setFname("Abhi");
 console.log("id "+ e1.getId() + " : " + e1.getFname() );
