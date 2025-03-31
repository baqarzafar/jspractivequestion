function foo(n){


    if(n<=0){

      return 0 ;

     }
     else{
       

        return  n * foo(n-1)
     }
  

}

console.log(f00(20))