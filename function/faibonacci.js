       // faibonacci0
       var arr=[0,1]
       for (var a=2; a<=12 ;a++){
           arr [a]= arr[a-1]+ arr[a-2]
       }
       console.log(arr)
       
       for(var i=2; i<=15; i++){
           arr[i]=arr[i-1] + arr[i-2]
       }
       console.log(arr)
       
       
       
           // fibonacci function create
       
       function fibonacce(n){
          if(typeof n!='number'){
              return 'plz give number '
          }
       
           var array=[0,1]
           for(var j=2;j<=n; j++){
               array[j]= array[j-1] + array[j-2]
           }
           return array
       }
       var check=fibonacce(12)
       console.log(check)
       
       var check=fibonacce([0,1],16)
       console.log(check)
       
       
       // again crate function
       
       
       
       
       function fibo(number){
           if(typeof number !='number'){
               return 'Please Give Number'
           }
           if (number<2){
               return 'please enter a positive number and garterthen 2'
           }
       
            var array=[0,1]
           for(var a=2;a<=number;a++){
               array[a]=array[a-1]+array[a-2]
           }
           return array
       }
       console.log(fibo(8))
       
       
       // recursive way fibonacci
       
       function reFivo(num){
           if(num==0){
               return 0
           }
           if(num==1){
               return 1
           }
           return reFivo(num-1)+reFivo(num-2)
       }
       console.log(reFivo(6))
       
       
        function recursive(n){
            if(n==0){
                return 0
            }
            if(n==1){
                return 1
            }
            return recursive(n-1)+(n-2)
        }
        console.log(5)
       
        function fev(n){
            if(n==0){
                return [0]
            }
            if(n==1){
                return [0,1]
            }
            var fevo=fev (n-1)
            fevo[n]=fevo[n-1]+fevo[n-2]
            return fevo
        }
        console .log(fev(6))