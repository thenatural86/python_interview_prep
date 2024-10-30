def uniqueMorseRepresentations(words):
        morse_code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

        res = set()

        for word in words:
            morse = ""
            for char in word:
                morse += morse_code[ord(char) - 97]
            res.add(morse)

        return len(res)
