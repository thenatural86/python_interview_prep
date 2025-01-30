def largest_int(arr):
    max_int = 0

    for element in arr:
        if max_int is 0 or element >= max_int:
            max_int = element
    return max_int
