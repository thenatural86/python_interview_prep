def check_for_target(nums, target):
    left = 0
    right = len(nums) - 1

    while left < right:
        current = nums[left] + nums[right]
        if current == target:
            return True
        if current > target:
            right -= 1
        if current < target:
            left += 1

    return False


nums = [1, 2, 4, 6, 8, 9, 14, 15]
target = 13
print(check_for_target(nums, target))
