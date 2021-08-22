
    // negative er agger number gula ke alada 
    var num=[2,3,4,5,-4,5,7,5,-8,5,-3,1,2]

    var st=[]
    for(var i=0;i<num.length;i++){
        if(num[i]<0){
            break;
         
    }
    st.push(num[i])
        }
        
    console.log(st)




    // positive and negetive alada kora
    var positive=[]
    var negative=[]
    for(var i=0;i<num.length;i++){
        if(num[i]>0){
            positive.push(num[i])
        }
        else{negative.push(num[i])}
    }
    console.log(positive,negative)