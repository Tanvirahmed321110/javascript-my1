//   check reduce function
var arr=[1,2,3,4,6,8]
var red=arr.reduce(function(previous,current){
    return previous+current
})
console.log(red)


function myReduce(array,callback,acc){
    for(var a=0;a<array.length;a++){
        acc=callback(acc,array[a])
    }
    return acc
}

 var check= myReduce(arr,function(pre,curr){
     return pre+curr
 },0)
 console.log(check)


 var check2=myReduce(arr,function(pre,curr){
     return Math.min(pre,curr)
 },arr[0])

 var check3=myReduce(arr,function(pre,curr){
     return Math.max(pre,curr)
 },0)

 console.log(check)
 console.log(check2)
 console.log(check3)


 
var num=[12,2,3,4,5,6,78,8]
var check=num.reduce(function(pre,curr){
    return Math.max(pre,curr)
})
console.log(check)

var a=num.reduce(function(pre,cur,acc){
    return pre+cur
},10)
 console.log(a)


         // create reduce funciton

 function myReduce1(array,callback,acc){
     for (var a=0;a<array.length;a++){
        acc=callback(acc,array[a])
     }
     return acc
 }

 num=[1,2,3,4,5]
var result=myReduce1(num,function(pre,curr,acc){
    return pre+curr
},num[0])
 console.log(result)
