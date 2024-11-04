def maximumWealth(self, accounts):
        max_wealth = 0

        for customer in accounts:
            max_wealth = max(sum(customer), max_wealth)

        return max_wealth
