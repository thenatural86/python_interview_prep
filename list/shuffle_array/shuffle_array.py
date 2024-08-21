# You can solve this problem by iterating through the first half of the array (nums[:n]) and the second half of the array (nums[n:]), and then interleaving the elements from each half to create the desired output.

def shuffle_array(nums, n):
    result = []
    
    for i in range(n):
        result.append(nums[i])
        result.append(nums[n + i])    
    return result

