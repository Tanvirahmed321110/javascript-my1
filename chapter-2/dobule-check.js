var nam=['tanvir','sakib','mamum','tanvir','lotip']
function dobleCheck(array){
 var store=[]
 for(var element of nam){
     if(store.indexOf(element)==-1){
         store.push(element)
     }
 }
 return store
}
var c=dobleCheck(nam)
console.log(c)


var roll=[3,54,6,7,43,2,4,5,7,5,3,2]

function double(array){
    const store=[]
    for(const element of array){
        if(store.indexOf(element)==-1){
            store.push(element)
        }
    }
    return console.log(store)
}
double(roll)

var rans=[22,4,6,7,89,94,2,3,4]

function checkDoble(arr){
    var joma=[]
    for(var element of arr){
        if(joma.indexOf(element)==-1){
            joma.push(element)
        }
    }
    return joma
}
var d=checkDoble(rans)
console.log(d)