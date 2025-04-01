


// bubble sort  wiht the binary sort algorithm

function foo(array ){
    

     for(let i = 0 ;  i <array.length-1 ; i++ ){

        for(let j = 0 ;  j< array.length - 1 - i; j++){

            if(array[j]> array[j+1]){
                 [ array[j]   , array[j+1] ] = [array[j+1] , array[j]]
            }



        }






     }
     console.log(array)

     let high = array.length-1
     let low  = 0
     let  target = 10
 
   
 
 
 
 
     while (low <= high) {
            let  pivot = Math.floor((low+ high)/2 )
             
            if(target === array[pivot]){
           
             console.log("target found")
             return 
            }
 
            if (target < array[pivot]) {
             high = pivot - 1; // Move left
         } else {
             low = pivot + 1;  // Move right
         }
 
 
     }
 

    }


    foo( [20 , 50 , 80 , 40 , 10 ] )

























  





