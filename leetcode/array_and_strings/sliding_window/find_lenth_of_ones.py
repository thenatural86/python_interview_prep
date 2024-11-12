def find_length(s):
    curr = 0

    for right in range(len(s)):
        if s[right] == '0':
            curr += 1
        while curr <= 1:
            pass

s = "1101100111"

print(find_length(s))
