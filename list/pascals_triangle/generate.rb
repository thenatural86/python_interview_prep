def generate(numRows)
  triangle = []

  (0...numRows).each do |i|
    row = [1] * (i + 1)
    (1...i).each do |j|
      row[j] = triangle[i - 1][j - 1] + triangle[i -1][j]
    end
    triangle << row
  end

  return triangle
end
