import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelper Tests', () => {
    const helper = new SSNHelper()
    const rightFormat1 = "811218-9876"
    const rightFormat2 = "201212-1212"
    const wrongFormat = "234232-9999"
    const tooShortFormat = "123456-123"
    const tooLongFormat = "123456-12345"
    const emptyFormat = " "


    test('The format should be the correct length', () => {
        const result = helper.isCorrectLength(rightFormat1)
        expect(result).toBe(true)
    })
    test('The format should be the correct length', () => {
        const result = helper.isCorrectLength(rightFormat2)
        expect(result).toBe(true)
    })
    test('The format should be the correct length', () => {
        const result = helper.isCorrectFormat(rightFormat1)
        expect(result).toBe(true)
    })

    test('The format should be the too short which is incorrect format', () => {
        const result = helper.isCorrectLength(tooShortFormat)
        expect(result).toBe(false)
    })
    test('The format should be the too long which is incorrect format', () => {
        const result = helper.isCorrectLength(tooLongFormat)
        expect(result).toBe(false)
    })
    test('The format should be empty which is incorrect format', () => {
        const result = helper.isCorrectLength(emptyFormat)
        expect(result).toBe(false)
    })

    test('The format should have a valid month added', () => {
        const result = helper.isValidMonth(12)

        expect(result).toBe(true)
    })
    test('The format should have a valid month added', () => {
        const result = helper.isValidMonth(1)

        expect(result).toBe(true)
    })
    test('The format should have a invalid month added', () => {
        const result = helper.isValidMonth(13)

        expect(result).toBe(false)
    })
    test('The format should have a invalid month added', () => {
        const result = helper.isValidMonth(0)

        expect(result).toBe(false)
    })
    test('The format should have a valid day added', () => {
        const result = helper.isValidDay(31)

        expect(result).toBe(true)
    })
    test('The format should have a valid day added', () => {
        const result = helper.isValidDay(1)

        expect(result).toBe(true)
    })
    test('The format should have a valid day added', () => {
        const result = helper.isValidDay(32)

        expect(result).toBe(false)
    })
    test('The format should have a valid day added', () => {
        const result = helper.isValidDay(0)

        expect(result).toBe(false)
    })

    test('The format should validate the SSN using the Luhn algoritm', () => {
        result = helper.luhnisCorrect(rightFormat1)

        expect(result).toBe(true)
    })
    test('The format should validate the SSN using the Luhn algoritm', () => {
        result = helper.luhnisCorrect(rightFormat2)

        expect(result).toBe(true)
    })
    test('The format should not validate the invalid SSN using the Luhn algoritm', () => {
        result = helper.luhnisCorrect(wrongFormat)

        expect(result).toBe(false)
    })



});
