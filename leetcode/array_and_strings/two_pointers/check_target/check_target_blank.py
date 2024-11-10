def check_for_target(nums, target):
    left = 0
    right = len(nums) - 1

    while left < right:
        if nums[left] + nums[right] == target:
            return True
        if nums[left] + nums[right] > target:
            right -= 1
        if nums[left] + nums[right] < target:
            left += 1

    return False


nums = [1, 2, 4, 6, 8, 9, 14, 15]
target = 13
print(check_for_target(nums, target))
