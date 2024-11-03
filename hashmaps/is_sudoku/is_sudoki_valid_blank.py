def isSudoku(self,board):
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]

    for r in range(9):
        for c in range(9):
            num = board[r][c]

            if num == '.':
                continue

            box_index = (r // 3) * 3 + 3 + c // 3

            if num in rows[r] or num in cols[c] or num in boxes[box_index]:
                return False
            rows[r].add(num)
            cols.add(num)
            boxes.add(num)

    return False
