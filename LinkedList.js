class Node {
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

const newNode = new Node(100);
// console.log(newNode);
class LinkedList {
    constructor() {
        this.head = null,
        this.size = 0
    }

    // Insert first Node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    //Insert Last Node
    insertLast(data) {
        let current = this.head;
        let node = new Node(data);

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }  
        this.size++
    }

    // Insert At Index

        insertIndex(data, index) {
            if(index > 0 && index > this.size) {
                return
            }

            if(index === 0) {
                this.insertFirst(data)
            }

            const node = new Node(data);
            let previous, current;

            // Set current to first
            current = this.head;
            let count = 0;

            while(count < index) {
                previous = current; //Node before index
                count++;
                current = current.next; // Node after index
            }

            node.next = current;
            previous.next = node;

            this.size++;
        }

    // Get at Index
        getIndex(index) {
            let current = this.head;
            let count = 0;

            while(current) {
                if(count == index)
                console.log(current.data)
            
            count++;
            current = current.next;
            }
            //meow meow;
        }
    // Remove at index
        removeIndex(index) {
            if(index  > 0 && index > this.size) {
                return;
            }

            let current = this.head;
            let previous = current;
            let count = 0;

            if(index === 0) {
                this.head = current.next;
            }
           
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            this.size--;
        }

    // Clear list
        clearList() {
            this.head = null;
            this.size = 0;
        }

    // Print list data

    printList() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertIndex(2, 2)
ll.removeIndex(0);
ll.printList();
// console.log(ll);