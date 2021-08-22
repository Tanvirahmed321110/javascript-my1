
var random=[3,4,6,8,-3,2,-5,7,8,4,3,6,7]
var nameAll=[
    {nane:'tanvir',age:21},
    {neme:'habib', age:20},
    {neme:'alal',age:22},
    {nane:'mr.x',age:18}
]

var result=random.sort()
console.log(result)
console.log(random.sort())

var ch=random.sort(function(a,b){
    if(a>b){
        return -1
    }
    else if(a<b){
        return 1
    }
    else{return 0}
})
console.log(ch)


    // sort asending(small-big)
var check=nameAll.sort(function(a,b){
    if(a.age>b.age ){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{return 0}
})
console.log(check)


   //sort dsending(big-small)
   var desnding=nameAll.sort(function(a,b){
       if(a.age>b.age){
           return -1
       }
       else if(a.age<b.age){
           return 1
       }
       else {return 0}
   })
   console.log(desnding)


 var rolls=[23,4,56,7,8,89,543]

var asen= rolls.sort(function(a,b){
     if(a>b){
         return 1
     }
     else if(a<b){
       return -1
     }
     else {return 0}
 })
 console.log(asen)
 console.log(rolls)
var random=[3,4,6,8,-3,2,-5,7,8,4,3,6,7]
var nameAll=[
    {nane:'tanvir',age:21},
    {neme:'habib', age:20},
    {neme:'alal',age:22},
    {nane:'mr.x',age:18}
]

var result=random.sort()
console.log(result)
console.log(random.sort())

var ch=random.sort(function(a,b){
    if(a>b){
        return -1
    }
    else if(a<b){
        return 1
    }
    else{return 0}
})
console.log(ch)


    // sort asending(small-big)
var check=nameAll.sort(function(a,b){
    if(a.age>b.age ){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{return 0}
})
console.log(check)


   //sort dsending(big-small)
   var desnding=nameAll.sort(function(a,b){
       if(a.age>b.age){
           return -1
       }
       else if(a.age<b.age){
           return 1
       }
       else {return 0}
   })
   console.log(desnding)


 var rolls=[23,4,56,7,8,89,543]

var asen= rolls.sort(function(a,b){
     if(a>b){
         return 1
     }
     else if(a<b){
       return -1
     }
     else {return 0}
 })
 console.log(asen)
 console.log(rolls)