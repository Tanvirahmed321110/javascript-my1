  
  10!=10*9*8*7*6*5*4*3*2*1 //ata e factorial
    
  var fact=1
  for (let i=1; i<=5; i++){
      fact=fact*i
      console.log(fact)
  }
  console.log(fact)

   
  var fact1=1
  for(let j=1; j<=7; j++){
      fact1=fact1*j
      console.log(fact1)
  }





   function factorialCalculation(giveNumber){
        let main=1
       for(let i=1; i<=giveNumber; i++){
            main=main*i
   }
   return  console.log('this is ur result factorial--',main)
}





   factorialCalculation(4)
   factorialCalculation(5)
   factorialCalculation(6)
   factorialCalculation(8)

 
  
    
   function newFactorialCalculator(digit){
         
         factorial=1
         for(let j=1; j<=digit; j++){
         factorial*=j   
         }
          return factorial
   }

//    var check=newFactorialCalculator(5)
//    console.log('show ur factorial number total',check)

   //function er vitor jodi return a console log kori tahole bahire function er name diye call korle hobe
   //function er vitor return a console log na korle bahire korte hobe
    
   
   var a=10
   factorialCalculation(a)
   factorialCalculation(4)     //return a console log kora aca
   factorialCalculation(5)    //return a console log kora aca
   factorialCalculation(6)    //return a console log kora aca
   factorialCalculation(8)    //return a console log kora aca
   

   var check=newFactorialCalculator(8)  //return a console log kora nai
   console.log('this your factorial number',check)  //return a console log kora nai
   console.log('output factorial',newFactorialCalculator(5))  //return a console log kora nai
   


       
                  // while loop 
     
      function factorialWlileLoop(giveDigit){
          let main=1
          let i=1
          while(i<=giveDigit){
            main=main*i
            i++
          }
           return main
        }
       
        const checks=factorialWlileLoop(5)
        console.log('this function is while loop ',checks)


        function factorialWlileLoop2(number){
          let mainNumber=1 
          let j=1
          while(j<=number){
            mainNumber*=j
            j++
          }return console.log('try 2 while loop factorial-functions',mainNumber)
        }

        factorialWlileLoop2(6)
        factorialWlileLoop2(8)
        
