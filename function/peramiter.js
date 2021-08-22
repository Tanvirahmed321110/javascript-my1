       //  pera miter
   
      function peraMiter(number1,number2,number3){
    var total=number1+number2+number3        //console.log(number1+number2+number3)
    console.log(total)
    }

peraMiter(2,2,3)
peraMiter(112,32,2)



function subMinas(a,c){
   var ac=a-c
   console.log(ac)
}
subMinas(455,34)
  
    function into(a,b,x){
        var ab=a*b
        var abx=ab+x         // shortcut --  console.log(a*b+x)
        console.log(abx)
        
   }
       

    into(4,3,5)
    into(4,3,4)
    




      // function er vitor array and for loop diye hajar hajar arry jokfol ber
  let arr=[1,2,3,4,5,6,7]
  var arr2=[11,2,3,4,5,6]
  var new1=[11,2,2,4,5]
  var new3=[11,2,2,4,5,1]
  
  
 function arrAll(arr){
     var result=0
     for(var a=0; a<arr.length; a++){
      result+=arr[a]
     }
   console.log(result)
 }


 arrAll(arr)
 arrAll(new1)
 arrAll(arr2)
 arrAll(new3)



  function newAdd(a,b,c,d){
      var ab=a+b
      var abc=ab*c
      var abcd=abc-d
      abcd+=100
      console.log(abcd)
      console.log('pera 1,pera 2',a,b,c,d)
      var again=abcd+50
      console.log(again)
      
  }

newAdd(10,10,10,50)


  function minus(x,y,z){
      var xy=x-y
      xy*=3
      var xyz=xy-10
      console.log('-5-',xyz)
  }

  minus(10,5,6)
  

 
               //return try
  function userName(nameFirst,nameLast){
    //   var firstName='Tanvir'
    //   var lastName='Ahmed'
      console.log(nameFirst,' ',nameLast)
      var returnHobe=nameFirst +' '+nameLast
      return returnHobe
  }

  var User= userName('Tanvir ','ahmed')
  console.log('this name is',User)



              //return try
  function name(f,l,g){
      if(g==='female'){
          var outdoor='mst:-'+f +' '+l
        //   console.log('mst:aaaa')
          return outdoor
      }
      else{
        //   console.log('md:ttttt')
           outdoor='md:-'+f +' '+l
          return outdoor}
  }

  var userN= name('lami','akter','female')
  console.log(userN)
  console.log(name('lami',3211,'female'))



 function last(f,l,number){
     var result=f+' '+l+' ' +number
     return result
   }

   var uname=last('tanvir','ahmed',321110)
  console.log(uname)




  function addThree(a,b,c){
    var ab=a+b
    var abc=ab+c
    return abc
}

var output= addThree(10,20,30)
console.log(output)
