


function foo(array){

   let n = array.length 

   for(let k = 0 ; k<n-1;k++){
       let min = k
      for(let l = k+1 ; l<n ; l++){
          
         if(array[l]<array[min]){ 
           min = l}}
     

    if(min !== k){ 

     let temp = array[k]
      array[k]=array[min]
     array[min] = temp
     }


   }
   return array

}


console.log(foo([20, 60 , 80 , 606,300 ]))