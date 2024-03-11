// var customSortString = function(order, s) {
//     function compare(c1, c2){
//         return order.indexOf(c1) - order.indexOf(c2);
//     }
    
//     return s.split('').sort(compare).join('');
// };
// For completeness, below is the "official" linear time solution.

// /**
//  * @param {string} order
//  * @param {string} s
//  * @return {string}
//  */
// var customSortString = function(order, s) {    
//     const myMap = new Map();
    
//     // Count the letters in "s"
//     for(const c of s){
//         if(!myMap.has(c)){
//             myMap.set(c, 0);
//         }
//         const count = myMap.get(c);
//         myMap.set(c, count+1);
//     }
    
//     // Output the letters in "s" in the order given by "order"
//     const answer = [];
//     for(const c of order){
//         const count = myMap.get(c);
//         for(let i = 0; i < count; ++i){
//             answer.push(c);    
//         }
//         myMap.delete(c);
//     }
    
//     // Output the letters in "s" which dont appear in "order"
//     for(const [c, count] of myMap.entries()){
//         const count = myMap.get(c);
//         for(let i = 0; i < count; ++i){
//             answer.push(c);    
//         }
//     }
    
//     return answer.join('')
// };



/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {    
    const myMap = new Map();
    
    // Count the letters in "s"
    for(const c of s){
        if(!myMap.has(c)){
            myMap.set(c, 0);
        }
        const count = myMap.get(c);
        myMap.set(c, count+1);
    }
    
    // Output the letters in "s" in the order given by "order"
    const answer = [];
    for(const c of order){
        const count = myMap.get(c);
        for(let i = 0; i < count; ++i){
            answer.push(c);    
        }
        myMap.delete(c);
    }
    
    // Output the letters in "s" which dont appear in "order"
    for(const [c, count] of myMap.entries()){
        const count = myMap.get(c);
        for(let i = 0; i < count; ++i){
            answer.push(c);    
        }
    }
    
    return answer.join('')
};