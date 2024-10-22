class ListNode:

    def __init__(self, key=-1, val=-1, next=None):
        self.key = key
        self.val = val
        self.next = next


class MyHashMap(object):

    def __init__(self):
        self.map = [ListNode() for i in range(1000)]  # Dummy head for each bucket

    def hash(self, key):
        return key % len(self.map)

    def put(self, key, value):
        cur = self.map[self.hash(key)]

        # Traverse the linked list to check if the key exists, if so update it
        while cur.next:
            if cur.next.key == key:
                cur.next.val = value
                return
            cur = cur.next

        # If key doesn't exist, append a new node
        cur.next = ListNode(key, value)

    def get(self, key):
        cur = self.map[self.hash(key)].next

        # Traverse the list to find the key
        while cur:
            if cur.key == key:
                return cur.val
            cur = cur.next

        # If key is not found
        return -1

    def remove(self, key) :
        cur = self.map[self.hash(key)]

        # Traverse the list to find the node before the one to remove
        while cur and cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next  # Remove the node
                return
            cur = cur.next



# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
