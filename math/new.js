var arr=[
    {price:4732},
    {price:1123},
    {price:212},
    {price:1233}
]
for(var a=0;a<arr.length;a++){
    if(arr[a].price<=212){
        break;
    }
    console.log(arr[a])
}
for(ar of arr){
    if(ar.price<500){
        continue;
    }
    console.log(ar)
}
for(var i=0;i<arr.length;i++){
    if(arr[i].price<1000){
        continue
    }
    console.log(arr[i])
}