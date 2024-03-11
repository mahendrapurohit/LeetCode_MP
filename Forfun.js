class MaxHeap {
    constructor(vals) {
        this.vals = [];
    }
    
    swap(i, j) {
        return [this.vals[i], this.vals[j]] = [this.vals[j], this.vals[i]]
    }
    
    insert(val) {
        this.vals.push(val);
        let cIdx = this.vals.length-1;
        
        while (true) {
            let pIdx = Math.floor((cIdx-1)/2);
            if (this.vals[pIdx]<this.vals[cIdx]) {
                this.swap(cIdx, pIdx);
                cIdx = pIdx;
            } else break;
        }
    }
    
    extractMax(){
        this.swap(0, this.vals.length-1);
        let max = this.vals.pop();
        let pIdx = 0;
        while (true) {
            let lIdx = (pIdx)*2+1,
                rIdx = (pIdx)*2+2, 
                swapIdx = null;
            if (lIdx<this.vals.length && this.vals[lIdx] > this.vals[pIdx]) {
                swapIdx = lIdx;
            }
            if (rIdx<this.vals.length && this.vals[rIdx] > this.vals[pIdx] && this.vals[rIdx]>this.vals[lIdx]) {
                swapIdx = rIdx;
            }
            if (swapIdx === null) break;
            this.swap(swapIdx, pIdx);
            pIdx = swapIdx;
        }
        return max;
    }
}
var furthestBuilding = function(heights, bricks, ladders) {
    const max_heap = new MaxHeap();
    
    let i = 0;
    for (i; i<heights.length-1; i++) {
        if (heights[i]<heights[i+1]) {
            let diff = heights[i+1] - heights[i];
            
            if (bricks < diff) {
                
                if (ladders === 0) {
                    return i;
                }
                
                if (max_heap.vals.length && max_heap.vals[0] >= diff) {
                    bricks+= (max_heap.extractMax() - diff);
                    max_heap.insert(diff);
                }
                
                ladders--;
                
            } else {
                bricks -= diff;
                max_heap.insert(diff);
            }
        }
    }
    
    return i;
};