  console.log(name)




  var tanvirNumbera=[66,55,78,65,33,44,56,88]
  var other=[1,3,4,56,23]

  var totalNumbers=0
  tanvirNumbera.forEach(function(value,index,tanvirNumbera){
    totalNumbers+=value
    console.log(totalNumbers)
  })
  console.log(totalNumbers)




       //foreach create/imprements

   var numbers=[3,2,22,4,5,6,]
       function copyForEach(numbers,GiveCallback){
           for(var a=0;a<numbers.length;a++){
           GiveCallback(numbers[a],a,numbers)
           }
       }

       copyForEach(numbers,function(value,index,numbers){
        
          numbers[index]=value+3
          console.log(value,index,numbers)
       })



       var nam=['tan','habib','sakib','mus']

       copyForEach(other,function(value,index,other){
        console.log(value,index,other)
        
       })




       ///try  again
       var match=[1,1,1,1,1,1,1,1]
       var runs=[12,13,11,14,1,1,23,0]
       var name=['tanvir','sakib','alal','musf','other']
       
       name.forEach(function(value,index,name){
          console.log(value,name,index)
       })
       
       var totalRuns=0
       match.forEach(function(value,index,match){
           console.log(value)
           totalRuns+=value
           console.log(index)
       })
       console.log(totalRuns)


       

         //create a Foreach
       function tryFor(match,GiveCallback){
           for(var z=0;z<match.length;z++){
               GiveCallback(match[z],z,match)
           }
       }


        tryFor(nam,function(value,index,nam){
          console.log(value)
          console.log(index)   
        })




       // create/implemation
      
       var mathchDate=[12,13,15,16,19]
      function TryOwnForEach(mathchDate,createCallback){
          for (var a=0;a<mathchDate.length;a++){
              createCallback(mathchDate[a],a,mathchDate)
          }
      }
      
      var aa=0
      TryOwnForEach(runs,function(value,index,runs){
          console.log(value)
          aa+=value
          console.log(aa)
      })
      console.log(aa)