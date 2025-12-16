
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
import { Password } from '../src/Correct'
// import { User } from '../src/Correct'
// import { jest } from '@jest/globals'
// import { MusicTrack } from "../src/Correct";

describe('Password class, test suite', () => {
    // put constants here to increase readability
    const password = '0123456789abc'
    
    test('Password should convert to hashtags', () => {
        const convertToHash = new Password(password)

        expect(convertToHash.getPasswordHash()).not.toBe('0123456789abc')
    })

    test('Should trim the spaces in the password', () => {
        const noSpaces = new Password(password)
        const spaces = new Password('0123456789abc ')

        expect(noSpaces.isPasswordSame(spaces)).toBeTruthy()

    })

    test('Password should not be the same', () => {
        const notTheSame1 = new Password(password)
        const notTheSame2 = new Password('01234567890abcd1w')

        expect(notTheSame1.isPasswordSame(notTheSame2)).toBeFalsy()

    })

    test('Should throw an error missing numbers', () => {
        const password = () => new Password('abcdefghijklm')

        expect(password).toThrow('No number found')
    })

    test('Should throw an error missing password', () => {
        const password = () => new Password('')

        expect(password).toThrow('Too short password')
    })

    test('Should have numbers in password', () => {
        const hasNumbers = new Password(password)

        expect(hasNumbers).toBeTruthy()
    })

    test('Should throw error password is too short', () => {
        const tooShort = () => new Password('0123456789a')

        expect(tooShort).toThrow('Too short password')
    })

    test('Should throw error password is too short', () => {
        const tooShort = () => new Password('012345a')

        expect(tooShort).toThrow('Too short password')
    })

    test('Should not be hashed the same way', () => {
        const hashed = new Password(password)
        const hashed2 = new Password('01234567890abc')

        expect(hashed.isPasswordSame(hashed2)).toBe(false)
    })

    test('Should give the error message "Too short password"', () => {
        const shortPass = () => new Password('01234567a')

        expect(shortPass).toThrow('Too short password')
    })

    test('Should throw error message "Invalid argument" when its comparet to a non-password object', () => {
        const firstPassword = new Password(password)

        expect(() => firstPassword.isPasswordSame('wrongPw')).toThrow('Invalid argument')
    })

    
})
// describe('Test class user', () => {
//     let mockHelper

//     beforeEach(() => {
//         mockHelper = {
//             getDomainName: jest.fn()
//         }
//     })
//     test('Should throw error message "Email must be from lnu.se domain"', () => {   
//         mockHelper.getDomainName.mockReturnValue(('gmail.com'))

//         const user = () => new User('araz', mockHelper)
        
//         expect(user).toThrow('Email must be from lnu.se domain')

// })
// })

// describe('Test MusicTrack class', () => {
//     test('Constructor should throw error message "Title cannot be empty"', () => {
//         const title = ''
//         const artist = 'Jack Black'
//         const duration = 421


//         const checkTitle = () => new MusicTrack(title, artist, duration)

//         expect(checkTitle).toThrow('Title cannot be empty')
//     })
// })
