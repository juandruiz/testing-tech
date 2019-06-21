class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
       this.head =this.tail = null 
       this.size = 0
    }
append(value){
    let newNode = new Node(value)
    let oldTail = this.tail
    if(!this.head){
        this.head = this.tail = newNode
    }
    else{
        this.tail = newNode
        oldTail.next = newNode
    }
}

    prepend(value){
        let newNode = new Node(value)
        let oldHead = this.head
        if(!this.head){
            this.head = this.tail = newNode
        }
        else{
            this.head = newNode
            this.head.next = oldHead
        }
    }

    search(value){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.value === value){
                return true
            }
            currentNode = currentNode.next
        }
        return false;
    }

    deleteHead(){
        if(!this.head){
            return null
        }
        else{
            let oldHead = this.head
            this.head = this.head.next
            oldHead.next = null
        }
    }
    findNodeBeforeTail(){
        let currentNode = this.head
        let prevNode = null
        if(currentNode.next == null){
            return null
        }
        while(currentNode){
            if(currentNode.next == null){
                return prevNode
            }
            prevNode = currentNode
            currentNode = currentNode.next
        }
    }

    deleteTail(){
        let nodeBeforeTail = this.findNodeBeforeTail()
        if(!this.tail){
            return null
        }
        else{
            console.log("deleted: " + this.tail.value )
            this.tail = nodeBeforeTail
            this.tail.next = null;
        }
    }

    printNodeValues(){
        let currentNode = this.head
        let result = []
        while(currentNode){
            result.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(result.join(" - "))
    }
}

let list = new LinkedList

list.append(3);
list.append(4);
list.append(5);
list.append(6);

var juan = list.head.next.next.next
var pipe = list.head.next

juan.next = pipe

juan









