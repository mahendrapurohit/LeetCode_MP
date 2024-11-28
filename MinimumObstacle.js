function minObstacleRemoval(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Cost array to keep track of minimum obstacles removed to reach each cell
    const cost = Array.from({ length: m }, () => Array(n).fill(Infinity));
    cost[0][0] = 0;  // Start point has no obstacles removed

    // Directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Deque for 0-1 BFS, starting from the top-left corner
    const deque = [];
    deque.push([0, 0]);  // Add the starting point to the deque

    while (deque.length > 0) {
        const [x, y] = deque.shift();

        // Explore all 4 possible directions
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check if the new position is within bounds
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                // If the new cell is an obstacle
                const newCost = cost[x][y] + grid[nx][ny];

                if (newCost < cost[nx][ny]) {
                    cost[nx][ny] = newCost;

                    // If the new cell is an empty cell (0), add to front of deque (no cost)
                    if (grid[nx][ny] === 0) {
                        deque.unshift([nx, ny]);
                    } else {
                        // If the new cell is an obstacle (1), add to back of deque (cost of 1)
                        deque.push([nx, ny]);
                    }
                }
            }
        }
    }

    // Return the minimum number of obstacles removed to reach the bottom-right corner
    return cost[m - 1][n - 1];
}
