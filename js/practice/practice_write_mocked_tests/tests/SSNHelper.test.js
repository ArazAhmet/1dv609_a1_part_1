import { SSNHelper } from '../src/correct/SSNHelper';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
// import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn";
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';


describe('SSNHelper Tests', () => {
    const helper = new SSNHelper()
    const rightFormat1 = "811218-9876"
    const rightFormat2 = "201212-1212"
    const wrongFormat = "234232-9999"
    const tooShortFormat = "123456-123"
    const tooLongFormat = "123456-12345"
    const emptyFormat = " "


    test('The length of the format should be correct', () => {
        const result = helper.isCorrectLength(rightFormat1)
        expect(result).toBe(true)
    })
    test('The length of the format should be correct', () => {
        const result = helper.isCorrectLength(rightFormat2)
        expect(result).toBe(true)
    })
    test('The format should be correct', () => {
        const result = helper.isCorrectFormat(rightFormat1)
        expect(result).toBe(true)
    })

    test('The format should be the too short which is a incorrect format', () => {
        const result = helper.isCorrectLength(tooShortFormat)
        expect(result).toBe(false)
    })
    test('The format should be the too long which is a incorrect format', () => {
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
    test('Month 0 Should be an invalid month', () => {
        const result = helper.isValidMonth(0)

        expect(result).toBe(false)
    })
    test('Day 31 should be a valid day', () => {
        const result = helper.isValidDay(31)

        expect(result).toBe(true)
    })
    test('Day 1 should be a valid day', () => {
        const result = helper.isValidDay(1)

        expect(result).toBe(true)
    })
    test('Day 32 should be a invalid day', () => {
        const result = helper.isValidDay(32)

        expect(result).toBe(false)
    })
    test('Day 0 should be a invalid day', () => {
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
