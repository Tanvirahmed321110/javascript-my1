
// && (and), ||(or), !(not)

  //  a && b

    // true  && true=true
    // true  && false=false
    // false && true=false
    // false && false=false 


    //   a   || b

        // true || true=true
        // true || false=true
        // false|| true =true
        // false|| false=false

        var a=50
        var b=20
        var c=30
        var d=40

        if(a>b &&b>c){
            console.log('a and b big number')
        }
        else{console.log('fail program')}

        if(a<b || b<c ){
            console.log('if conditon run')
        }
        else{console.log('else conditiopn run')}

        var not= !(a<b)
        console.log(not)

        if(a>b&& b<c&& d>c){
            console.log('3 conditions true')
        }
        else{console.log('3 in 3 not true')}


        if(a<b||b<c){
            console.log('orr is run')
        }
        else{console.log('else')}


                       // nested condition (akta if condition er vitor r akta if )

        if (a>b){
            if(c>d){
                console.log('nesterd is run')
            }
            else{console.log('else is run')}
        }               

       
     