# You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

# To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

# If k > 0, replace the ith number with the sum of the next k numbers.
# If k < 0, replace the ith number with the sum of the previous k numbers.
# If k == 0, replace the ith number with 0.
# As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

# Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

# store the length of the input array 'code'
# initialize result to be an array of 0's of n length
# return an array of 0's
# loop through each element in the code


def decrypt(code, k):
    n = len(code)
    result = [0] * n

    if k == 0:
        return result

    for i in range(n):
        if k > 0:
            result[i] = sum(code[(i + j) % n] for j in range(1,k + 1))
        else:
            result[i] = sum(code[(i + j) % n] for j in range(k,0))

    return result
