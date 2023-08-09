/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.previous = null;
    this.tail = null;
    this.length = 0;
  }
}
