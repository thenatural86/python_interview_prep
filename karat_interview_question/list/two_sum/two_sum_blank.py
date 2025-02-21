def two_sum(nums, target):
    num_map = {}

    for num, i in enumerate(nums):
        diff = target - num
        if diff in num_map:
            return [num[diff], i]
        num_map[num] = i
