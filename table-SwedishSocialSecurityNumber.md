| Version | SwedishSocialSecurityNumber | BuggySwedishSocialSecurityNumberNoLenCheck | BuggySwedishSocialSecurityNumberNoTrim | BuggySwedishSocialSecutityNumberNoLuhn | BuggySwedishSocialSecutityNumberWrongYear |
| --- | --- | --- | --- | --- | --- |
| Should throw an error message if the length is incorrect | ✅ | ❌ | ✅ | ✅ | ✅ |
| Should trim the whitespaces | ✅ | ✅ | ❌ | ✅ | ✅ |
| Should throw an error message if the format is incorrect | ✅ | ✅ | ✅ | ✅ |✅ |
| Should throw an error message if the SSN is invalid according to Luhns algoritm | ✅ | ✅ | ✅ | ❌ | ✅ |
| Should return the year from correct format | ✅ | ✅ | ✅ | ✅ | ❌ |
| Should return the month from correct format | ✅ | ✅ | ✅ | ✅ | ✅ |
| Should return the day from correct format | ✅ | ✅ |✅ | ✅ | ✅ |
| Should return the serial number from correct format | ✅ | ✅ |✅ | ✅ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 100% |