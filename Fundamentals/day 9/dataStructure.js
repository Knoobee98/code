//stack
class Stack{
    #maxSize;
    #container = [];

    constructor(maxSize = 10){
        this.#maxSize = maxSize;
    }

    push(element){
        if(this.#maxSize === this.#container.length){
            console.log("data full");
        } else {
            this.#container.push(element);
        }
        this.#container.push(element);
    }

    pop(){
        this.#container.pop();
    }

    get(){
        console.log(this.#container);
    }
}

let nstack = [];
nstack = new Stack();
nstack.push("A");
nstack.push("B");
nstack.push("C");
nstack.push("D")
nstack.push("A");
nstack.push("B");
nstack.push("C");
nstack.push("D");
nstack.push("A");
nstack.push("B");
nstack.push("C");
nstack.push("D");
nstack.push("A");
nstack.push("B");
nstack.push("C");
nstack.push("D");
nstack.get();
nstack.pop();
nstack.get();

//queue
