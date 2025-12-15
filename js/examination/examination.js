//You will be given a class that you need to test here. 
export function maxOfThree(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Alla tal måste vara >= 0");
    }
    const values = [a, b, c];
    return Math.max(...values);
}