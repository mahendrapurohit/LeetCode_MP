// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21



// let reverse = function(x) 
// {  
//    if(x > 0)
//    {   
//     x= x + " ";
//     return x.split("").reverse().join(""); 
//    } else
//     if (x<0)
//    { 
//      x = x + " ";
//       return "-"+ x.slice(1,-1).split("").reverse().join("");
     
//    }
//  };

   //  let z = reverse(-987);

   //  console.log(z);

    let   reverse = function(x) {
      let rev = 0;
      const sign = x < 0 ? -1 : 1;
      x = Math.abs(x);
      while (x !== 0) {
        const digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
      }
      const result = sign * rev;
      if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0;
      return result;
    };
  
    let x = -321446
    console.log(reverse(x));
