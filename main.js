import { LinkedList } from "./linked-list.js";

let linkedList = new LinkedList();

linkedList.append("Hello");
linkedList.append("there.");
linkedList.prepend("Why...");

console.log(linkedList.head.nextNode);