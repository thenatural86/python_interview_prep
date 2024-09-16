def shuffle_array(nums, n):
    result = []

    for i in nums[1:]:
        result.append(nums[i])
        result.append(nums[n + i])

    return result
