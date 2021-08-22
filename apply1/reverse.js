    //reverse while loop
 function reverseFact(num){
     let main=1
     let a=num
     while(a>=1){
         main=main*a
         a--
     }return console.log(main)
 }

 reverseFact(6)
 
  function reverseFactorial(number){
       let fact=1
       let i=number
       while(i>=1){
           fact=fact*i
           i--
       } return fact
  }

  const check=reverseFactorial(5)
  console.log('while loop reverse ',check)



                    // for loop reverse

         function reverseForLopp(digit){
             let factorial=1
             for(let a=digit; a>=1; a--){
                 factorial*=a
             } return factorial
         }

    const call=reverseForLopp(6)
    console.log(call)


     function reverseForLoop2(number)
           {
               let fact=1
               for(let i=number; i>=1; i--){
                   fact*=i
               } return console.log('for loop check reverse --',fact)
           }
    
       reverseForLoop2(5)     
       reverseForLoop2(8)     


       function recursive(a){
           if(a==1){
               return 1
           } else{
               return a*recursive(a-1)
           }
       }

       const result=recursive(6)
       console.log(result)

       function factorial(z){
           if(z==1){
               return 1
           } return z*factorial(z-1)
       }

        let checks=factorial(8)
        console.log(checks,'this is factorial recursive systems in javaScript')