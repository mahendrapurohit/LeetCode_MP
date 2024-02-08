
let reverse = function(x) 
{  

    x= x + " ";
    return x.split("").reverse().join(""); 
    
    if (x < 0 )
   {
     return  '' + x;
   }
 };

    let z = reverse(987);
    console.log(z);  
