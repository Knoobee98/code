class Queue{
    #container = [];

    enqueue(element){
        this.#container.push(element);
    }

    dequeue(){
        this.#container.shift();
    }

    getContainer(){
        return this.#container;
    }
}

let nQue = new Queue();
nQue.enqueue("A");
nQue.enqueue("B");
nQue.enqueue("C");
console.log(nQue.getContainer());
nQue.dequeue();
console.log(nQue.getContainer()); 