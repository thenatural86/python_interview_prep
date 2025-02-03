function anagram(stringA, stringB) {
  let charMapA = buildCharMap(stringA)
  let charMapB = buildCharMap(stringB)

  for (let char of charMapA) {
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
      return false
    }
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }
  return true
}

function buildCharMap(str) {
  let charMap = {}

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
