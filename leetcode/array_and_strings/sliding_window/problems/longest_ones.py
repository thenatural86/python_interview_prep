def longestOnes(nums, k):
        left = 0

        for right in range(len(nums)):
            k -= 1 - nums[right]
            if k < 0:
                k += 1 - nums[left]
                left += 1

        return right - left + 1
