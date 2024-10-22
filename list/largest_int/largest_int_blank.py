def largest_int(arr):
    max_int = None

    for element in arr:
        if max_int is None or element >= max_int:
            max_int = element
    return max_int
