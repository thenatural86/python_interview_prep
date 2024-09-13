def decrypt(code, k)
  n = code.length
  result = Array.new(n, 0)

  return result if k == 0

  n.times do |i|
    if k > 0
      result[i] = (1..k).sum { |j| code[(i + j) % n] }
    else
      result[i] = (k...0).sum { |j| code[(i + j) % n] }
    end
  end

  result
end

# Example usage:
puts decrypt([5, 7, 1, 4], 3).inspect  # Output: [12, 10, 16, 13]
puts decrypt([1, 2, 3, 4], 0).inspect  # Output: [0, 0, 0, 0]
puts decrypt([2, 4, 9, 3], -2).inspect # Output: [12, 5, 6, 13]
