//Set
class set{
    #container = [];
    
    setContainer(element){
        if(this.#container.length){
            //check datanya
            if(this.#container.includes(element)){
                console.log("data Exist");
            } else {
                this.#container.push(element);
            }
        } else {
            //push
            this.#container.push(element)
        }
    }
    getSet(){
        return this.#container;
    }
}

let nSet = new set();
nSet.setContainer("A");
nSet.setContainer("B");
nSet.setContainer("A");
nSet.setContainer("C");
console.log(nSet.getSet());