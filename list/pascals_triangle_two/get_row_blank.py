def getRow(rowIndex):
    row = [1]

    for i in range(1 , rowIndex + 1):
        row = [1] + [row[j + 1] + row[j] for j in range(len(row) - 1)] + [1]

    return row
