class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    let count = 0;
    let current = head;

    // Step 1: Count k nodes
    while (count < k && current) {
        current = current.next;
        count++;
    }

    // If we counted k nodes, we can reverse this group
    if (count === k) {
        let prev = null;
        current = head;

        // Step 2: Reverse k nodes
        for (let i = 0; i < k; i++) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        // Step 3: Recursively call for the next group and link
        head.next = reverseKGroup(current, k);

        // Step 4: Return new head
        return prev;
    }

    // If we've less than k nodes, return head as is
    return head;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

