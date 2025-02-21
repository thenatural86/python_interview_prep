function StringChallenge(strArr) {
  let N = strArr[0],
    K = strArr[1]
  let charCount = new Map()

  // Populate the character count map for K
  for (let char of K) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  let left = 0,
    right = 0,
    minLength = Infinity,
    minSubstring = ''
  let requiredChars = charCount.size
  let formedChars = 0
  let windowCount = new Map()

  while (right < N.length) {
    let rightChar = N[right]
    windowCount.set(rightChar, (windowCount.get(rightChar) || 0) + 1)

    if (
      charCount.has(rightChar) &&
      windowCount.get(rightChar) === charCount.get(rightChar)
    ) {
      formedChars++
    }

    while (formedChars === requiredChars) {
      let currentSubstring = N.substring(left, right + 1)
      if (currentSubstring.length < minLength) {
        minLength = currentSubstring.length
        minSubstring = currentSubstring
      }

      let leftChar = N[left]
      windowCount.set(leftChar, windowCount.get(leftChar) - 1)

      if (
        charCount.has(leftChar) &&
        windowCount.get(leftChar) < charCount.get(leftChar)
      ) {
        formedChars--
      }

      left++
    }

    right++
  }

  // Reverse minSubstring and ChallengeToken, then return the combined result
  let challengeToken = 'sqam30ptj279'
  return (
    minSubstring.split('').reverse().join('') +
    ':' +
    challengeToken.split('').reverse().join('')
  )
}

// Example cases
console.log(StringChallenge(['aaabaaddae', 'aed'])) // Expected output: "ead:972jtp03maqs"
console.log(StringChallenge(['aabdccdbcacd', 'aad'])) // Expected output: "dbaa:972jtp03maqs"
