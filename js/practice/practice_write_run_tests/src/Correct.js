class Password {
  #passwordHash

  constructor(pw) {
    const trimmedPW = pw.trim() // Ta bort mellanslag i början och slutet

    if (this.#isTooShort(trimmedPW)) {
      throw new Error('Too short password')
    }

    if (!this.#containsNumber(trimmedPW)) {
      throw new Error('No number found')
    }

    this.#passwordHash = this.#simpleHash(trimmedPW)
  }

  #simpleHash(input) {
    let hash = 7
    for (let i = 0; i < input.length; i++) {
      hash = hash * 31 + input.charCodeAt(i)
    }
    return hash
  }

  #isTooShort(pw) {
    return pw.length < 12
  }

  #containsNumber(text) {
    return /\d/.test(text)
  }

  getPasswordHash() {
    return this.#passwordHash
  }

  isPasswordSame(other) {
    if (!(other instanceof Password)) {
      throw new Error('Invalid argument')
    }
    return this.getPasswordHash() === other.getPasswordHash()
  }
}

export { Password }
 

// export class User {
//     constructor(userName, email) {
//         if (email.getDomainName() !== 'lnu.se') {
//             throw new Error('Email must be from lnu.se domain');
//         }
        
//         this.userName = userName;
//         this.email = email;
//     }
// }

// export class MusicTrack {
//     /**
//      * @param {String} title
//      * @param {String} artist
//      * @param {Number} duration
//      */
//     constructor(title, artist, duration) {
//         if (title.length === 0) {
//             throw new Error('Title cannot be empty');
//         }
//         if (artist.length === 0) {
//             throw new Error('artist cannot be empty');
//         }
//         if (duration <= 0) {
//             throw new Error('duration cannot be less than or equal to zero');
//         }
//         this.title = title;
//         this.artist = artist;
//         this.duration = duration; // duration in seconds
//     }
// }