def shuffle_array(nums, n):
  result = []

  (0...n).each do |i|
    result << nums[i]
    result << nums[n + i]
  end
  return result
end
