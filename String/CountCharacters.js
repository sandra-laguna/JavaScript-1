/**
 * @function countCharacters
 * @description Given a string, count the number of each character.
 * @param {String} str - The input string
 * @return {Object} - Object with characters and number of times
 * @example countCharacters("hello") => {h: 1, e: 1, l: 2, o: 1}
 */

const countCharacters = (str) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

  if (typeof str !== 'string') {
    throw new TypeError('Input should be a string')
  }

  if (specialChars.test(str)) {
    throw new TypeError('Input must not contain special characters')
  }

  if (/\d/.test(str)) {
    throw new TypeError('Input must not contain numbers')
  }

  var obj = {}
  for (var i = 0; i < str.toLowerCase().length; i++) {
    var char = str.toLowerCase().charAt(i)
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }

  return obj
}

export { countCharacters }