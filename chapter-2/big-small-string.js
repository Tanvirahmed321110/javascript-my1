    // array thake bigString ber korar function
    var fnd=['tnavir', 'alal', 'babu', 'sadekul']
  
    function largeSting(array){
        let store=''
        array.map(function(str){
            if(str.length>store.length){
                store=str
            }
        })
            return store
   }
     var c=largeSting(fnd)
     console.log(c)
   
   
        // again
     var allfnf=['as','ds','rfs','asshvd','ddomk','df']
    
    function checkBigString(array){
        let result=array[1]
        array.map(function(value){
           if(value.length>result.length){
               result=value
           }
        })
        return console.log(result)
    }
    checkBigString(allfnf)
    checkBigString(fnd)
   
   
   
   
          //  array thake small string ber korar function
   
         function smallStringInArray(array){
             var store=array[0]
             array.map(function(value){
                 if(value.length<store.length){
                     store=value
                 }
             })
            return store
         }  
   
       var a=  smallStringInArray(fnd)
       console.log(a)
       var b=smallStringInArray(allfnf)
       console.log(b)
   
   
   