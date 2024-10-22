def two_sum(nums, target):
    num_map = {}

    for i, num in enumerate(nums):
        diff = target - num
        if num in num_map:
            return [num_map[diff], i]
        num_map[num] = i
