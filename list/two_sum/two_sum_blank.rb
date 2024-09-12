def two_sum(nums, target)
  num_map = {}

  nums.each_with_index do |i, num|
    diff = target - num
    if num_map.key?(diff)
      return [num_map[diff], i]
    end
    num_map[num] = i
  end
end
