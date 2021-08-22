
     // recursive funtion

     function recursive(number){
        if(number===0){
            return 0
        }
        console.log('recursive-',number)
        recursive(number-1)
    }
    recursive(10)

    function sumTwenty(n){
        if(n===0){
            return 0
        }
        return  n+sumTwenty(n-1)
    }
    console.log(sumTwenty(10))


    function recuFact(anyNumber){
        if(anyNumber===1){
            return 1
        }
        else{return anyNumber*recuFact(anyNumber-1)}
    }
    var check=recuFact(5)
    console.log(check)


    function sum(n){
        if(n===0){
            return 0
        }
        
        else{return n+sum(n-1)}
    }
    console.log(sum(10))


    
    function wh(number){
        var store=1
        var a=1
        while(a<=number){
            store*=a
            a++
        }
        return console.log(store,'this is ret')
    }
    wh(5)

    function rev(num){
        var st=1
        for(var a=num;a>=1;a--){
            st*=a
        }
        return st
    }
    console.log(rev(6))

    function whRec(number){
        var joma=1
        var a=number
        while(a>=1){
         joma*=a
         a--
        }
        return joma
    }
    console.log(whRec(4))

    function last(n){
        if(n===1){
            return 1
        }
        return n*last(n-1)
    }
    console.log(last(6))
    var lastt=last(4)
    console.log(lastt)