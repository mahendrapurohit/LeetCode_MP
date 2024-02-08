
var divide = function(dividend, divisor) {

    if (divisor === 0) {
      return Infinity; 
    }
  
    if (dividend === 0) {
      return 0;
    }
  
    const isNegative = (dividend < 0) !== (divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
  
    let quotient = 0;
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient++;
    }
  
    if (isNegative) {
      quotient = -quotient;
    }
  
    return quotient;
    
  };
  
      
  