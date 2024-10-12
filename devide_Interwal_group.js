function minGroups(intervals) {
    // Step 1: Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Create a min-heap to track the end times of the groups
    const minHeap = [];

    for (const interval of intervals) {
        const [start, end] = interval;
        
        // Step 3: If the current interval starts after the earliest end time, pop from heap
        if (minHeap.length > 0 && minHeap[0] < start) {
            minHeap.shift(); // Remove the earliest end time
        }

        // Add the current interval's end time to the heap
        minHeap.push(end);
        // Maintain the min-heap property
        minHeap.sort((a, b) => a - b);
    }

    // The size of the heap is the number of groups needed
    return minHeap.length;
}

// Example usage:
const intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]];
console.log(minGroups(intervals));  // Output: 3
