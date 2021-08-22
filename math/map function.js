
var aabs=[112,1,3,42,56,2]
   var check=aabs.map(function(value){
      return value+=10       
   }) 
  console.log(aabs)
  console.log(check)
     

     var arr=[1,3,44,5,6]
     var arr1=[2,3,4,5,6,7]
     var mapStore=arr.map(function(value){
        return value+=11
   })
   console.log(mapStore)
   

   




     function ownMap(array,createCallback){
        var storeData=[]
         for(var a=0;a<array.length;a++){
           var giveCallback=createCallback(array[a])
            storeData.push(giveCallback)
          }
          return storeData
      }

 var check =ownMap(arr,function(value){
        return   value*=2
      })
      console.log(check)



     var array=[2,3,4,567]
      function myMap(array,callbackFu){
        var mainStore=[]
        for(var a=0;a<array.length;a++){
            var callbackStore=callbackFu(array[a])
            mainStore.push(callbackStore)
        }
        return mainStore
    }
 
    var output=myMap(arr1,function(value){
        return value+=10
    })
    console.log(arr1)
    console.log(output)
