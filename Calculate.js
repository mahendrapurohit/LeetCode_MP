function calculateFencedArea(a, b, w) {
    // Ensure the path width is feasible
    if (a <= 2 * w || b <= 2 * w) {
        return "Path width is too wide for the given field dimensions.";
    }

    // Calculate the area of the inner rectangle
    const innerLength = a - 2 * w;
    const innerWidth = b - 2 * w;
    const fencedArea = innerLength * innerWidth;

    return fencedArea;
}

// Example usage:
const a = 20; // length of the field
const b = 10; // width of the field
const w = 2;  // width of the path

const result = calculateFencedArea(a, b, w);
console.log(`The area of the fenced field excluding the path is: ${result} square meters.`);
