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

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = new Node(val);
      this.tail = new Node(val);
    } else {
      this.tail.next = new Node(val);
      this.tail = new Node(val);
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = new Node(val);
      this.tail = new Node(val);
    } else {
      newNode.next = this.head;
      this.head = new Node(val);
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("Can no pop from an empty list");
    }

    let current = this.head;
    let previus = null;

    while (current.next) {
      previus = current;
      current = current.next;
    }

    if (previus) {
      previus.next = null;
      this.tail = previus;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("Can no shift from an empty Array");
    }
    let delated = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    return delated;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index provided is invalid");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index provided is invalid");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index provided is invalid");
    }

    if (idx === this.length) {
      this.push(val);
    } else if (idx === 0) {
      this.unshift(val);
    } else {
      newNode = new Node(val);
      let current = this.head;
      let previus = null;
      for (let i = 0; i < idx; i++) {
        previus = current;
        current = current.next;
      }
      previus.next = newNode;
      newNode.next = current;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error(" Index provided is invalid");
    }
    let current = this.head;
    let previus = null;

    if (idx === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      for (let i = 0; i < idx; i++) {
        previus = current;
        current = current.next;
      }
      previus.next = current.next;
      if (!current.next) {
        this.tail = previus;
      }
    }
    this.lenght--;
    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
