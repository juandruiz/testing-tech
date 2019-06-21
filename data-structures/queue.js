class Queue{
    constructor(){
        this.head = 0
        this.tail = 0
        this.storage = {}
    }
    queue(element){
        this.storage[this.tail] = element
        this.tail++
    }
    unqueue(){
        let removedElement = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removedElement
    }
}

let queue = new Queue
queue.queue("Perro")
queue.queue("Gato")
console.log(queue.storage);
queue.unqueue();
queue.unqueue();
console.log(queue.storage);
queue.queue("paquito")
queue.queue("otro beagle")
console.log(queue.storage);
