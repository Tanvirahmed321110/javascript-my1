   
   function inchToFeet(inches){
     var feet=inches/12
     return feet
   }

   
   function inchToFeet2(giveInput){
     var result= giveInput/12
     return result
   }
    
   
    function kiloToMile(kilo){
       var mile=kilo*0.621371
       return mile
    } 
 

 
    var onePerson=inchToFeet(893)       //function call korci
    console.log(onePerson)
    console.log(inchToFeet2(12))       // console log er vitoer function call korci



  var bInch=264
  var feet= inchToFeet(bInch)
  console.log(feet)

  var numFix=feet.toFixed(2)
  console.log(feet.toFixed(2))
  console.log(parseFloat(numFix))

  var cInch=132
  var feet=cInch/12
  console.log(feet.toFixed(0))

  var a=140
  var output=inchToFeet(a)     // sorasori - console.log(inchToFeet(a))
  console.log(output)


  console.log(kiloToMile(100))
  var mile=kiloToMile(120)
  console.log(mile)

  mile= kiloToMile(470)    // ai vabe o kora jay console.log(kiloToMile (470))
  console.log(mile)
  var mileToFixed=mile.toFixed(2)  //tofixed korci point er por 2 number
  console.log(mileToFixed)
  var convertNumber=parseFloat(mileToFixed)   //toFixed korar jonno string hoyece (atake abr num)
  console.log(convertNumber)