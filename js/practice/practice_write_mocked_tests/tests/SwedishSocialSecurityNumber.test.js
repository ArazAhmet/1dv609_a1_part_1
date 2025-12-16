import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
import { describe, expect, jest, test } from '@jest/globals'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    const rightFormat = "811218-9876"
    const rightFormatWithSpaces = " 811218-9876 "
    const wrongFormat = " 890202341-32286 "

    let mockHelper

    beforeEach(() => {
        mockHelper = {
            isCorrectLength: jest.fn(),
            isCorrectFormat: jest.fn(),
            isValidMonth: jest.fn(),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn(),
        }
    })

    test('Should throw an error message if the length is incorrect', () => {
        mockHelper.isCorrectLength.mockReturnValue(false)
        const result = () => new SwedishSocialSecurityNumber(wrongFormat, mockHelper)
        expect(result).toThrow("To short, must be 11 characters")
    })

    test('Should trow an error message if the format is incorrect', () => {
        mockHelper.isCorrectFormat.mockReturnValue(false)
        const result = () => new SwedishSocialSecurityNumber(wrongFormat, mockHelper)
        expect(result).toThrow("Incorrect format, must be: YYMMDD-XXXX")
    })

    test('Should throw an error message if the month is invalid', () => {
        mockHelper.isValidMonth.mockReturnValue(false)
        const result = () => new SwedishSocialSecurityNumber(wrongFormat, mockHelper)
        expect(result).toThrow("Invalid month in SSN")
    })

    test('Should throw an error message if the day is incorrect', () => {
        mockHelper.isValidDay.mockReturnValue(false)
        const result = () => new SwedishSocialSecurityNumber(wrongFormat, mockHelper)
        expect(result).toThrow("Invalid day in SSN")
    })

    test('Should throw an error message if the SSN is invalid according to Luhns algoritm', () => {
        mockHelper.luhnisCorrect.mockReturnValue(false)
        const result = () => new SwedishSocialSecurityNumber(wrongFormat, mockHelper)
        expect(result).toThrow("Invalid SSN according to Luhn's algorithm")
    })

    test('Should return the year from correct format', () => {
        const result = new SwedishSocialSecurityNumber(rightFormat, mockHelper)
        expect(result.getYear()).toBe("81")
    })
    test('Should return the month from correct format', () => {
        const result = new SwedishSocialSecurityNumber(rightFormat, mockHelper)
        expect(result.getMonth()).toBe("12")
    })
    test('Should return the day from correct format', () => {
        const result = new SwedishSocialSecurityNumber(rightFormat, mockHelper)
        expect(result.getDay()).toBe("18")
    })
    test('Should return the serial number from correct format', () => {
        const result = new SwedishSocialSecurityNumber(rightFormat, mockHelper)
        expect(result.getSerialNumber()).toBe("9876")
    })


});