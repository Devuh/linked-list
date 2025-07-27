import { LinkedList } from "./linked-list.js";

let linkedList = new LinkedList();

linkedList.append("Hello");
linkedList.append("there.");
linkedList.prepend("Why...");

console.log("Size: " + linkedList.size());

console.log(linkedList.toString());

console.log(linkedList.find("Hello"));

linkedList.insertAt("Oh my...", 2);

console.log(linkedList.toString());

linkedList.removeAt(2);

console.log(linkedList.toString());