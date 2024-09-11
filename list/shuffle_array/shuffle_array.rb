def shuffle(nums, n)
  result = []
  (0...n).each do |i|
    result << nums[i]      # Append x_i
    result << nums[n + i]  # Append y_i
  end
  result
end
