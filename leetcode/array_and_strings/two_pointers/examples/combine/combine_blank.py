def combine(arr1, arr2):

    i = j = 0
    ans = []

    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            ans.append(arr1[i])
            i += 1
        else:
            ans.append(arr2[j])
            j += 1

    while i < len(arr1):
        ans.append(arr1[i])
        i += 1

    while j < len(arr2):
        ans.append(arr2[j])
        j

    return ans



arr1 = [1, 4, 7, 20]
arr2 = [3, 5, 6]

print(combine(arr1, arr2))
