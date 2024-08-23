def two_sum(numbers, target):
    num_map = {}
    
    
    for i,num in enumerate(numbers):
        difference = target - num
        if difference in num_map:
            return [num_map[difference], i]
        num_map[num] = i