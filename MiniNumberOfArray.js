

var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]); // Sort the points based on the start position

    let arrows = 1; // Start with 1 arrow assuming at least one balloon exists
    let end = points[0][1]; // Initialize the end position with the end of the first balloon

    // Iterate through the points
    for (let i = 1; i < points.length; i++) {
        // If the current balloon starts after the end position, it requires a new arrow
        if (points[i][0] > end) {
            arrows++; // Increment arrow count
            end = points[i][1]; // Update end position to the end of the current balloon
        } else {
            // If the current balloon is within the range of the end position,
            // update the end position to the minimum of the current end position and the end of the current balloon
            end = Math.min(end, points[i][1]);
        }
    }

    return arrows; // Return the total number of arrows required
};





// Example 1:

// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
// Example 2:

// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
// Example 3:

// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
 

// Constraints:

// 1 <= points.length <= 105
// points[i].length == 2
// -231 <= xstart < xend <= 231 - 1
