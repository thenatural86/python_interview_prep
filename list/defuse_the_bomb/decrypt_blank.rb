def decrypt(code, k)
  n = code.length
  result = Array(0, n)

  return result if k == 0

  (0...n).times do |i|
    if k > 0
      result[i] = (1..k)sum(|j| { code[(i + j) % n]})
    else
      result[i] = (k...0).sum(|j| { code[(i + j) % n]})
    end

  end
  return result
end
