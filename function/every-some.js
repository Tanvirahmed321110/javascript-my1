          //every fun
          
          var a=[3,4,56,4,3,2,32,5,78,7,5,42,2,3,63]
          var b=[3,5,7,0]
          var c1=b.every(function(value){
              return value%2===1
          })
          console.log(c1)
          
          
          
          var c2=a.every(function(value){
              return value%2===0
          })
          console.log(c2)
          
          
                 //some function
                 var aa=[2,4,6,7,-89,9]
                 var c2=aa.some(function(value){
                     return value%2===0
                 })
                 console.log(c2)
          
                 var c3=aa.some(function(value){
                     return value<=0
                 })
                 console.log(c3)