class ListNode:

    def __init__(self, key=-1, val=-1, next=None):
        self.key = key
        self.val = val
        self.next = next


class MyHashMap(object):

    def __init__(self):
        self.map = [ListNode() for i in range(1000)]

    def hash(self, key):
        return key % len(self.map)

    def put(self, key, val):
        cur = self.map[self.hash(key)]

        while cur.next:
            cur.next.key == key
            cur.next.val = val
            return
        cur = cur.next
