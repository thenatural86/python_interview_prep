# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]

class Solution(object):
    """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
    # create an empty dictionary to store the difference between the target and each element as we iterate through the array
    nums = [2,7,11,15]
    target = 9
    
    def twoSum(self,nums,target):
        num_map = {}
        # iterate through nums array
        # The enumerate() function is used to loop over a sequence (like a list, tuple, or string) while keeping track of both the index and the value of each element in the sequence.
        for i, num in enumerate(nums):
            # initialize the difference to be target - num
            diff = target - num
            # if the difference is in the dictionary, we've found the two indices that sum up to the target
            if diff in num_map:
                # so we return the index from the dictionary and the current index.
                return [num_map[diff], i]
            # If not, we add the current element and its index to the dictionary.
            num_map[num] = i