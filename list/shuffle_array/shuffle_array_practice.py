def shuffle_array(nums, n):
   result = []
   
   for i in range(n):
      result.append(nums[i])
      result.append(nums[n + i])
   return result