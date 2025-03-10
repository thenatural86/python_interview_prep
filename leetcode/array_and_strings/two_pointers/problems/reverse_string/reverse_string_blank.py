def reverseString(s):
    left = 0
    right = len(s) - 1

    while left < right:
        tmp = s[right]
        s[right] = s[left]
        s[left] = s[right]

        left += 1
        right -= 1

    return s

s = ["h","e","l","l","o"]
s2 = ["H","a","n","n","a","h"]

print(reverseString(s))
print(reverseString(s2))
