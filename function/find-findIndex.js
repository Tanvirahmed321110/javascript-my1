
 var finds=[3,4,2,43,6,8,9]
 var result=finds.findIndex(function(index){
     return index===43
 })
 console.log(result)

 var result=finds.find(function(value){
     return value===43
 })
 console.log(result)


 function myFind(array,callback){
     for (var a=0;a<array.length;a++){
         if(callback(array[a])){
          return array[a]
         }
     }
 }

 
 var res=myFind(arr,function(value){
     return value===6
 })
 console.log(res)

 function myfindIndex(array,callback){
     for(var a=0;a<array.length;a++){
         if(callback(array[a])){
             return a
         }
     }
 }

 var res=myfindIndex(arr,function(index){
     return index===61
 })

 console.log(res)


                     // value dektehole(array.find)

 var result=arr.find(function(value){
     return value===8
 })
 console.log(result)

                     // index dekte hole(array.index)

 var resultIndex=arr.findIndex(function(value){
     return value===8
 })
 console.log(resultIndex)



              //create a find function
    var roll=[3211,321145,3232,4534]  
    function myFind(array,callbackFn){
        for(var a=0;a<array.length;a++){
            if(callbackFn(array[a])){
                return array[a]
            }
        }
    }         
            //call myfind
     var check= myFind(roll,function(value){
         return value===3211
     })       
     console.log(check)

       //create a findIndex function

  function myfindIndex2(array,callbackFu){
      for(var a=0;a<array.length;a++){
          if(callbackFu(array[a])){
              return  a
          }
      }
  }
          //call myFindIndex
       
  var check11=   myfindIndex2(roll,function(value){
         return value===3211
     })     
     console.log(check11)

     roll.findIndex(function(value){
         return value===321109
     })

     function myFind(array,call){
         for(var a=0;a<array.length;a++){
          if(call(array[a])){
              return array[a]
          }
         }
     }

     var c=myFind(roll,function(value){
         return value===21331
     })