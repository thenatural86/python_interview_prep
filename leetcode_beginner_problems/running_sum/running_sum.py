def runningSum(self, nums):
        sums = []
        count = 0

        for i in nums:
            count += i
            sums.append(count)
        return sums
