import { Node } from "./node.js"

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }
  
  append(value) {
    if(this.#head == null) { 
      this.#head = new Node(value);
    } else {
      let currentNode = this.#head;
      while(currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if(this.#head == null) {
      this.#head = new Node(value);
    } else {
      let head = this.#head;
      this.#head = new Node(value);
      this.#head.nextNode = head;
    }
  }

  size() {
    let size = 0;
    let currentNode = this.#head;

    while(currentNode != null) {
      currentNode = currentNode.nextNode;
      size++;
    }

    return size;
  }
}

export { LinkedList };