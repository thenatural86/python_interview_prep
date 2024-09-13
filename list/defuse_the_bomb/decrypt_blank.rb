def decrypt(code, k)
  n = code.length
  result = Array(0, n)

  if k == 0
    return result
  end

  n.times do |i|
    if k > 0
      result[i] = (1..k).sum(|j| { code[(i + j) % n] })
    else:
      result[i] = (k...0).sum(|j| { code[(i + j) % n] })
    end
  end
end
