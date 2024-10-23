class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertAtHead = (head, data) => {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
};

const insertAtTail = (head, data) => {
    const newNode = new Node(data);
    if (head == null) {
        return newNode;
    }
    let tail = head;
    while (tail.next != null) {
        tail = tail.next;
    }
    tail.next = newNode;
    return head;
};

const displayList = (head) => {
    let current = head;
    let result = '';
    while (current) {
        result += current.data + ' -> ';
        current = current.next;
    }
    console.log(result + 'null');
};

const merge = (head1, head2) => {
    if (head1 == null) {
        return head2;
    }
    if (head2 == null) {
        return head1;
    }
    let mergedHead = null;
    if (head1.data <= head2.data) {
        mergedHead = head1;
        mergedHead.next = merge(head1.next, head2);
    } else {
        mergedHead = head2;
        mergedHead.next = merge(head1, head2.next);
    }
    return mergedHead;
};

const mergeKLists = (lists) => {
    if (lists.length === 0) return null;

    let step = 1;
    while (step < lists.length) {
        for (let i = 0; i < lists.length - step; i += step * 2) {
            lists[i] = merge(lists[i], lists[i + step]); 
        }
        step *= 2;
    }
    return lists[0]; 
};
const sortList = (head) => {
    if (head == null || head.next == null) {
        return head;
    }

    let sortedList = null;
    let current = head;

    // Insert nodes one by one into the new sorted list
    while (current !== null) {
        let nextNode = current.next;
        sortedList = sortedInsert(sortedList, current);
        current = nextNode;
    }

    return sortedList;
};
//insert nodes in sorted order
const sortedInsert = (head, newNode) => {
    if (head == null || head.data >= newNode.data) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    while (current.next != null && current.next.data < newNode.data) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    return head;
};
let head1 = null;
head1 = insertAtHead(head1, 3);
head1 = insertAtHead(head1, 2);
head1 = insertAtHead(head1, 1); // List 1: 1 -> 2 -> 3
let head2 = null;
head2 = insertAtHead(head2, 6);
head2 = insertAtHead(head2, 7);
head2 = insertAtHead(head2, 4);
head2 = sortList(head2);
console.log('List 1:');
displayList(head1);
console.log('List 2 (sorted):');
displayList(head2);
let lists = [head1, head2];
lists.forEach((list, index) => {
    console.log(`List ${index + 1}:`);
    displayList(list);
});
let mergedList = mergeKLists(lists);
console.log('Merged List:');
displayList(mergedList);
