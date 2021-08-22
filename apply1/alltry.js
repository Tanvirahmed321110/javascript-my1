 
   function celciesToFarhenhite(celcies){

          let formula=(celcies*9/5)+32
          return formula
   }


   let check=celciesToFarhenhite(34)
   console.log('farhenhait-',check)
   let checks=celciesToFarhenhite(40)
   console.log('farhenhait-',checks)
   console.log('farhenhait--',celciesToFarhenhite(37))




   function fahrenheitToCelsius(giveFahrenheit){
         var formula=(giveFahrenheit-32)*5/9
         return console.log('Celsius-',formula)
   }

   fahrenheitToCelsius(102)
   fahrenheitToCelsius(95)
   

      function leapYearCheck(year){
          if((year%4===0)&&(year%100!=0)||(year%400===0)){
              return console.log(year,'yeaH,this year is leap year')
          }
           else  { return  console.log(year,' this year not leap year')}
      }

       leapYearCheck(2038)
       leapYearCheck(2024)
       leapYearCheck(2028)



          //grate ber kora

  let mark=89
  if(mark<33){
      console.log(mark,'Sry !,failed')
  }
  else if(mark<=39){
    console.log(mark,'Pass mark only')
  }
   else if(mark<=49){
       console.log(mark,'is grade c')
   }   
   else if (mark<=59){
    console.log(mark,'is grade b')
   }  
   else if (mark<=69){
    console.log(mark,' is grade a-')
   } 
   else if (mark<=79){
    console.log(mark,'is grade a')
   } 
   else if (mark<=100){
    console.log(mark,'Wow ! is grade a+')
   }


      var getMark=43
     switch(getMark){
         case getMark<=43 : console.log(getMark,'failed marks')
         break;

         default:  console.log('fail')
     }

           /// variable swap

     var one ='tanvir ahmed'
     var two='ibna foysal'
     console.log(one,two)

     var temp=one
     one=two
     two=temp
     console.log(one,two)
    

     var names='tanvir ahmed'
     var userName=32110
     console.log(names,userName)
          
         // ata ke jodi swap kori
        var temp=names
        names=userName
        userName=temp
        console.log(names,userName)

        var ab=12
        var ac=2112
        console.log(ab,ac)

        var tem=ab
        ab=ac
        ac=tem
        console.log(ab,ac)


        