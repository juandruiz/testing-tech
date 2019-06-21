class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }
    size(){
        return this.count
    }
    insert(value){
        let newNode = new Node(value)
        const  searchTree = node => {
            if(value < node.value){
                if(!node.left){
                    node.left = newNode
                }
                else{
                    searchTree(node.left)
                }
            }
            else if (value > node.value){
                if(!node.right){
                    node.right = newNode
                }
                else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }
    delete(){

    }
    min(){
        let currentNode = this.root
        while(currentNode){
            if(!currentNode.left){
                return currentNode.value
            }
            currentNode = currentNode.left
        }
    }
    max(){
        let currentNode = this.root
        while(currentNode){
            if(!currentNode.right){
                return currentNode.value
            }
            currentNode = currentNode.right
        }
    }
    contains(value){
        let currentNode = this.root
        while(currentNode.value != value)
        {
            if(value < currentNode.value){
                if(!currentNode.left){return false}
                currentNode = currentNode.left
            }
            else if(value > currentNode.value){
                if(!currentNode.right){return false}
                currentNode = currentNode.right
            }

        }
        return true
    }
    dfsInOrder(){
        let result = [];
        let traverse = node => {
            if(node != null){
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root)
        return result;
    }
    dfsPreOrder(){
        let result = [];
        let traverse = node => {
            if(node != null){
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root)
        return result;
    }
    dfsPostOrder(){
        let result = [];
        let traverse = node => {
            if(node != null){
                traverse(node.left);
                traverse(node.right);
                result.push(node.value);
            }
        }
        traverse(this.root)
        return result;
    }
    bfs(){
        let result = []
        let queue = []

        queue.push(this.root)
        while(queue.length){
            let currentNode = queue.shift()
            result.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return result
    }
}

let bst = new BST(33)
bst.insert(13)
bst.insert(3)
bst.insert(44)
bst.insert(54)
bst.insert(2)

console.log(bst.bfs())
