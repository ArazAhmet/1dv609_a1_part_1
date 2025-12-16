| Version | Correct | BugDoesNotHash | BugDoesNotTrim | BugisPasswordAlwaysSame | BugMissingNumberCheck | BugMissingPasswordCheck | BugNeverContainsNumbers | BugToShortPassword | BugVeryShort | BugWrongHashingAlgorithm | BugWrongMessage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Password should be hashed | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Should trim the spaces in the password | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |✅ | ✅ | ✅ |
| Password should not be the same | ✅ | ✅ | ✅ | ❌ | ✅ |✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Should throw an error missing numbers | ✅ | ✅ | ✅ | ✅ | ❌ |✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Should throw an error missing password | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Should have numbers in password | ✅ | ✅ | ✅ | ✅ |✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Should throw error password is too short | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Should throw error password is too short | ✅ | ✅ |✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Should not be hashed the same way | ✅ | ✅ |✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ |
| Should give the error message "Too short password" | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Should throw error message "Invalid argument" when its comparet to a non-password object | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 93.33% | 93.33% | 41.17% | 100% | 100% | 100% | 100% |