 function recusive(n){
     if (n===1){
         return 1
     } else {return n*recusive(n-1)} 

 }

 let output=recusive(6)
 console.log(output,'is a result recursive')


   
  
 function factorial(a){
     if(a===1){
         return 1
     } else{return a*factorial(a-1)}
 }

  var result=factorial(5)
  console.log(result)



