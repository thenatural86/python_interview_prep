def max_sub_array(nums)
  max_sum = nums[0]
  current_sum = nums[0]

  nums[1..-1].each do |num|
    current_sum = (num, current_sum + max_sum).max
    max_sum = (current_sum, max_sum).max
  end
  return max_sum
end
