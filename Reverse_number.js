
let reverse = function(x) 
{  
   if(x > 0)
   {   
    x= x + " ";
    return x.split("").reverse().join(""); 
   } else
    if (x<0)
   { 
     x = x + " ";
      return "-"+ x.slice(1,-1).split("").reverse().join("");
     
   }
 };

    let z = reverse(-987);

    console.log(z);

// let number = -123456789;

// let result = 0;

// while(number>0){

//     rightmost = number%10;
    
//     result = result*10 + rightmost;
    
//     number = Math.floor(number/10);
// }

// while(number<0){

//   rightmost = number%10;
  
//   result = result*10 + rightmost;
  
//   number = Math.floor(number/10);
// };

// console.log("Reversed number is : " "+ result );
