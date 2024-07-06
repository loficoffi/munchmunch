// This module provides different functions for various pseudo-random operations.

// Returns a deterministic random number given a specific seed.
function seededRandom(seed : any) {
    return function() {
        // Parameters for the generator
        const a = 1664525;
        const c = 1013904223;
        const m = 4294967296; // 2**32
        seed = (a * seed + c) % m;
        return seed / m;
    };
}

// Returns the given array shuffled randomly.
function shuffleArray(array : any, seed : any) {
    const random = seededRandom(seed);
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index using the seeded random generator
        const j = Math.floor(random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generates a seed from the current moment in time.
function getSeedFromDate() {
    const today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

export {seededRandom, shuffleArray, getSeedFromDate};