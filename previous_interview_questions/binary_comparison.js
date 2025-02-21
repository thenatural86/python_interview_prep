function StringChallenge(strArr) {
  let decimalNumber = parseInt(strArr[0], 10)
  let binaryString = strArr[1]
  let correctBinary = decimalNumber.toString(2)

  // Ensure both binary strings are of the same length by padding with leading zeros
  let maxLength = Math.max(correctBinary.length, binaryString.length)
  correctBinary = correctBinary.padStart(maxLength, '0')
  binaryString = binaryString.padStart(maxLength, '0')

  let changes = 0
  for (let i = 0; i < maxLength; i++) {
    if (binaryString[i] !== correctBinary[i]) {
      changes++
    }
  }

  return changes
}

// Example cases
console.log(StringChallenge(['56', '011000'])) // Expected output: 1
console.log(StringChallenge(['5624', '0010111111001'])) // Expected output: 2
console.log(StringChallenge(['44', '111111'])) // Expected output: 3
