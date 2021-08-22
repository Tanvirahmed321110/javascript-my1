 
  var roll=[15 ,17 ,19,20,30]
  roll[1]=16
  roll[4]=21
  roll[5]=23
  
  roll.push(31)  // or   console.log(roll.push(31))
  console.log(roll.push(32))
  console.log(roll)
  console.log(roll.unshift(11))
  console.log(roll)
  roll.shift()    // orconsole.log(roll.shift())
  roll.pop()      //or console.log(roll.pop())
  console.log(roll)

  var nn=[21,23,3,4,67]
  nn.splice(4,0,64,65,66)
  console.log(nn)
  nn.splice(2,2)
  nn.splice(2,1,164)
  console.log(nn)
         

                     //multidaimensional array

    var bigArray=[
        [10,20,30,40,50],
        [11,21,31,41,51],
        [12,22,32,42,52]
    ]

      console.log(bigArray)
      console.log(bigArray[2])
      console.log(bigArray[1])

      for(var a=0; a<bigArray.length;a++){
          for(var b=0; b<bigArray[a].length;b++){
              console.log('subarray ' +a+ '...' +bigArray[a][b])
          }
      }

      var newBig=[
        [12,22,34,40,50],
        [12,23,33,41,51],
        [12,22,32,42,52]
      ]
      
       newBig [2][5]=2121
      console.log(newBig[2])

      for(var c=0;c<newBig.length;c++){
          for(var d=0;d<newBig[c].length; d++){
              console.log('again try ' +c+ ':' +newBig[c][d])
          }
      }

         //array reverse

         var arrNew=[1,2,3,4,5,6,7,8]

        //   for(var a=0;a<(arrNew.length/2);a++){
        //       var againVar=arrNew[a]
        //       arrNew[a]=arrNew[arrNew.length-1 -a]
        //       arrNew[arrNew.length-1 -a]=againVar
        //        console.log(arrNew)
        //        }  

               ////   or
               console.log(arrNew.reverse())