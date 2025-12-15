//You are going to write tests for the examination.js 

import { maxOfThree } from "./examination.js"; // Uncomment when Password class is added


describe(' Test maxOfThree class', () => {
    test('If a is lower than 0 the test should throw error message "Alla tal måste vara >= 0"', () => {
        
        const isALower = () => new maxOfThree(-2, 3, 4)

        expect(isALower).toThrow("Alla tal måste vara >= 0")
        
    });

    
});