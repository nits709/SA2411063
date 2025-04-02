/*
1. for loop : Number of iterations are known (calender/list/link/dropdown/Menu)
2. While: (Entry control loop): Number of iterations are not known
3. do While: Exit control loop - one time execution without matter what condition it is


*/

// console.log("----------for loop-------------------");


// // print my name for 5 times     i=1 -- nitin | i< = 5

//     for(let i = 1;i<=5;i++){

//         console.log("today we are learning Loops : " + i);
        
//     }

//     // print even number from 1 -to 10

//     for(let i = 1;i<=10;i++){

//         if(i%2==0){
//             console.log("even number is "+ i);
            
//         }
        
//     }


    // for(;;){

    //     console.log("Hi");
        
    // }



    //javascript for 10 times

        let i = 1;
        while(i<=10){

            console.log("Javascripts");
             i++;       
        
        }

        //factorial fo 5! = 5*4*3*2*1 = 120

        let fact=1
        for(let n=5;n>=1;n--){
            fact = fact*n;
        }
            console.log("factorial of 5 is "+ fact);
            

console.log("------do while loop------------");
 let a = 1 ;

 do{

        console.log("do while");
        a++;

 }while(a>=10);


