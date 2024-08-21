# You can solve this problem by iterating through the first half of the array (nums[:n]) and the second half of the array (nums[n:]), and then interleaving the elements from each half to create the desired output.

def shuffle_array(nums, n):
    # We initialize an empty list result 
    result = []
    
    # loop through the range n, 
    for i in range(n):
        # append elements from the first half (nums[i]) 
        result.append(nums[i])
        # and the second half (nums[n+i])
        result.append(nums[n + i])    
    return result

