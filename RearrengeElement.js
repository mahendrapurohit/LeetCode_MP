
let rearrangeArray = function(nums) {
    let v1 = [];
    let v2 = [];
    let ans = [];
    
    for (let num of nums) {
        if (num > 0) {
            v1.push(num);
        } else {
            v2.push(num);
        }
    }
    let ind1 = 0;
    let ind2 = 0;

    while (ind2 < nums.length / 2) {
        ans.push(v1[ind1]);
        ind1++;
        ans.push(v2[ind2]);
        ind2++;
    }   
    return ans;
};