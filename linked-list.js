import { Node } from "./node.js"

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    if(this.head == null) { 
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while(currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = new Node(value);
    }
  }
}

export { LinkedList };