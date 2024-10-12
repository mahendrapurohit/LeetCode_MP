class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function minGroups(intervals) {
    // Step 1: Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Create a min-heap to track the end times of the groups
    const minHeap = new MinHeap();

    for (const interval of intervals) {
        const [start, end] = interval;

        // Step 3: If the current interval starts after the earliest end time, pop from heap
        if (minHeap.size() > 0 && minHeap.peek() < start) {
            minHeap.pop(); // Remove the earliest end time
        }

        // Add the current interval's end time to the heap
        minHeap.insert(end);
    }

    // The size of the heap is the number of groups needed
    return minHeap.size();
}

// Example usage:
const intervals1 = [[5,10],[6,8],[1,5],[2,3],[1,10]];
console.log(minGroups(intervals1));  // Output: 3

const intervals2 = [[1,3],[5,6],[8,10],[11,13]];
console.log(minGroups(intervals2));  // Output: 1
