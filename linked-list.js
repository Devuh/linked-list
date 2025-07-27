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

  head() {
    return this.#head;
  }

  tail() {
    let currentNode = this.#head;

    while(currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if(index >= this.size()) return "Oops! Out of range.";
    let currentNode = this.#head;

    for(let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    let currentNode = this.#head;
    let prevNode = null;

    while(currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    prevNode.nextNode = null;
    return currentNode;
  }

  contains(value) {
    let currentNode = this.#head;

    while(currentNode != null) {
      if(currentNode.value == value) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.#head;
    let index = 0;

    while(currentNode != null) {
      if(currentNode.value == value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let string = "";
    let currentNode = this.#head;

    while(currentNode != null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    string += 'null';
    return string;
  }
}

export { LinkedList };