def shuffle_array(nums, n):
    results = []

    for i in range(n):
        results.append(nums[i])
        results.append(nums[n + i])
    return results
