def matrixReshape(mat, r, c):
    m = len(mat)
    n = len(mat[0] if m > 0 else 0)

    if m * n != r * c:
        return mat

    flat_list = [num for row in mat for num in row]

    new_mat = []

    for i in range(r):
        new_mat.append(flat_list[ i * c: (i + 1) * c])

    return new_mat
