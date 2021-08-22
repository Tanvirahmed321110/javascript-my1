 
  var numbers=3131
  var remainder=numbers%2
  console.log(remainder===0)

  function evenNumber(number){
    if(number%2===0){
      var result='this is even numbers,true'
      return  result
    }

    else { var booleans=false
      return booleans}
  }

  
  console.log(evenNumber(120))
  var check=evenNumber(7373)
  console.log(check)
  console.log(evenNumber(8889))
   

  
  function oddNumber(number){
     if(number%2 !=0){
       var bol=true +' ,yeah  this number is odd'
       return  bol
     }
      else{
          
         var bole=false +', sorry this number is even'
         return bole
  }
  }


  let a=121341
  const call =oddNumber(a)
  console.log(call);
  console.log(oddNumber(12))
  const call2=(oddNumber(1212))
  console.log(call2)


  const call3=evenNumber(54)

  console.log(call3)




        // 31-80 er moddhe odd number ber koro
        for(var i=31; i<=80; i++){
          if(i %2===1){
              console.log(i)
          }
      }
   
   
       // 40-90 even number
         var ab=90
        for(var z=40; z<=ab; z++){
            if(z%2===0){
                console.log('even number-',z)
            }
        }



        function checkOdd(number){
          if (number%2===1){
             return console.log(number,"is Odd number")
          } else{ return console.log(number,"is even Number")}
        }

        checkOdd(632)
        checkOdd(621)


          //20 thake 60 er odd number ber koro (while loop diye)

          var main=60
          var q=21
            while(q<=main){
              console.log('odd number-',q)
               q+=2
            }


            //20 thake 60 er even number ber koro (while loop diye)
            var j=19
            while(j<=60){j++
              if(j%2===0){     
                console.log('this number is even number--',j)
              }
            }


              //11 thake 30 er odd number ber koro (while loop diye)
               
              var i=11
              while(i<30){ 
                i++
                if(i%2===1){
                  console.log('this is odd number',i)
                }
              }


              //4 number er sum
              function fourAddNumber(a,b,c,d){
                let abcd=a+b+c+d
                return abcd
              }

             const total= fourAddNumber(3,4,95,6)
             console.log(total)
             
             
