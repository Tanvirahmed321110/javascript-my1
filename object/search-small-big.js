var items=[
    {name:'oil',   price:120},
    {name:'creme', price:220},
    {name:'stick', price:200},
    {name:'B-Spra',price:300},
    {name:'sup' ,  price:80}
]

var highPrice=items[1]
for(var a=0;a<items.length;a++){
    if(items[a].price>highPrice.price){
         highPrice=items[a]
    }
}
console.log(highPrice)




// or
var smallPrice=items[2]
for(var item of items){
    if(item.price<smallPrice.price){
        smallPrice=item
    }
}
console.log(smallPrice)



 //funcitons lowprice
function checkLow(array){
    var lowItem=array[2]
    for(var a=0;a<array.length;a++){
        if(array[a].price<lowItem.price){
            lowItem=array[a]
        }
    }
    return lowItem
}
var out= checkLow(items)
console.log(out)




 //funtion bigPrice  
function big(array){
    high=array[0]
    for(arrayitme of array){
        if(arrayitme.price>high.price){
            high=arrayitme
        }
    }
    return high
}
console.log(big(items))





var items=[
    {name:'oil',   price:120},
    {name:'oil creme', price:220},
    {name:'Best oil', price:200},
    {name:'B-Sprea',price:300},
    {name:'sup number one' ,  price:80}
]




function search(prodacts,search){
    var store=[]
    for(var prodact of prodacts){
        var nam=prodact.name
        //  console.log( prodact.name,'---- this prodact is availavle')
        if(nam.indexOf(search) !=-1){
           store.push(prodact)
        }
    }
    return store
}
var check=search(items,'oil')
console.log(check)

var prodacts=[
    {name:'phone xaomi a', price:12000},
    {name:'laptop hp', price:43300},
    {name:'monitor walton' , price:12100},
    {name:'led monitor', price:13000},
    {name:'phone oppo', price:14000}
]



// or(1)
function searchItem(array,searchAny){
    var arr=[]
    for(item of array){
        if(item.name.indexOf(searchAny) !=-1){
            arr.push(item)
        }
    }
    return arr
}
console.log(searchItem(prodacts,'phone'))



// or (2)
function find(prodacts,findItem){
    var findStore=[]
    for(var a=0;a<prodacts.length;a++){
        console.log(prodacts[a].name)
        if(prodacts[a].name.indexOf(findItem) !=-1){  
            findStore.push(prodacts[a])   
        }
    }
    return findStore
}
 console.log(find(prodacts,'phone'))


 // or (3)
 function mapFind(array,item){
     var result=[]
     array.map(function(value){
         if(value.name.indexOf(item)!=-1){
             result.push(value)
         }
     })
     return result
 }
 console.log(mapFind(prodacts,'led'))