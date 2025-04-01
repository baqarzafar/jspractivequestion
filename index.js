// function foo(n) {
//     if (n <= 1) {
//         return 1;  // Base case: factorial(1) = 1
//     } else {
//         return n * foo(n - 1);  // Recursive call
//     }
// }

// console.log(foo(5)); // Output: 120



function foo2(array){
   
    for(let i = 0 ; i <=array.length ; i++){
        let pivot = array[0]

        if( array[i] > pivot)   {
               
           array [array[i],pivot] = [pivot , array[i]]




         console.log(array)
      
        
      
          
 }   }



}

console.log(foo2([20,50,30 ,10]))