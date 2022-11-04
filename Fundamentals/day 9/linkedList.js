class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // add an element at the end of the list
    add(element){
        // create a new node
        let node = new Node(element);
        // membuat {
        //            element: "", 
        //              next: null
        //            }

        // to store current node
        let current;
        //if list is empty, add the element and make it head
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;

            // iterate to the end of the list
            // note: end of the list --> next === null
            while(current.next){
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size += 1;
    }

    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.element);
            curr = curr.next;
        }
    }

    insertAt(element, index){
        if(index < 0 || index > this.size){
            return console.log("Please insert a valid index");
        } else {
            // creates a new node
            let node = new Node(element);
            let curr = this.head;
        }

        // add the element to the first index
        if(index == 0){
            node.next = this.head;
            this.head = node;
        } else {
            let curr = this.head;
            let prev;
            // let it = 0;

            // while(it < index){
            //     it ++;
            // }

            // iterate over the list to find the position to insert
            for(let i = 0; i < index; i++){
                // akan ngelooping mulai dari head sampai index
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            prev.next = node;
            node.next = curr;
            }
        this.size += 1;
    }

    removeAt(index){
        if(index < 0 || index >= this.size){
            return console.log("please enter a valid idex");
        } else {
            let curr = this.head;
            let prev = curr;
        }

        //deleting first element
        if(index === 0){
            this.head = curr.next;
        } else {
            //iterate over the list to find the
            //position to remove
            for(let i = 0; i < index; i++){
                prev = curr;
                curr = curr.next;
            }

            //remove the element
            prev.next = curr.next;
        }
        this.size -= 1;

        //return the remove element
        return curr.element;
    }

    removeElement(element){
        let current = this.head;
        let prev = null;

        // iterate over the list
        while(current != null){
            // comparing element with current element
            // if found then remove the and return true
            if(current.element === element){
                if(prev == null){
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size -= 1;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return null;
    }

    indexOf(element){
        let count = 0;
        let current = this.head;

        // iterate over the list
        while(current != null){
            // compare each element of the list\
            //with given element
            if(current.element === element){
                return count;
            }

            count += 1;
            current = current.next;
        }

        //not found
        return -1;
    }
    
}

// testing the code
const linkedlist = new LinkedList();
linkedlist.add("A");
linkedlist.add("B");
linkedlist.add("C");
linkedlist.insertAt("D", 2);
linkedlist.printList();


