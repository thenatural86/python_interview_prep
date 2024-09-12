# Given an integer array nums, find the
# subarray with the largest sum, and return its sum.


# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: The subarray [4,-1,2,1] has the largest sum 6.
# Example 2:

# Input: nums = [1]
# Output: 1
# Explanation: The subarray [1] has the largest sum 1.
# Example 3:

# Input: nums = [5,4,-1,7,8]
# Output: 23
# Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

#####################################

# Initialization:

# max_sum keeps track of the maximum sum found so far.
# current_sum keeps track of the sum of the current subarray.

# Iteration:
# slice from the element at index 1 to the end of the list
# for num in  nums[1:]:
# For each element in the array, you decide whether to add it to the current subarray (current_sum + num) or start a new subarray from that element (num). This is done by taking the maximum of these two values.
# Update max_sum if current_sum is greater than max_sum.

# Return:

# The function returns max_sum, which is the maximum sum of any subarray in the given list.


def max_sub_array(nums):
    max_sum = nums[0]
    current_sum = nums[0]

    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum
