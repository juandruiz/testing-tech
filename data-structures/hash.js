const hash = (key, size) => {
    let hashedKey = 0

    for(let i=0; i<key.length; i++){
        hashedKey += key.charCodeAt(i);
    }
    return hashedKey % size
}

class HashTable{
    constructor(){
        this.size = 20
        this.buckets = new Array(this.size);

        for(let i=0; i<this.buckets.length; i++){
            this.buckets[i] = new Map();
        }
    }

    insert(key,value){
        let idx = hash(key,this.size)
        this.buckets[idx].set(key,value)
    }

    remove(key){
        let idx = hash(key,this.size)
        let removedElement = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return removedElement
    }

    search(key){
        let idx = hash(key,this.size)
        return this.buckets[idx].get(key)
    }

}

let hashTable = new HashTable
hashTable.insert("Juan","Ruiz")
hashTable.insert("Pipe","Caballero")
hashTable.insert("Pipasdfe","Cabasadfllero")
hashTable.insert("Piasdfpe","Cabalasdflero")
hashTable.insert("Piaape","Caballeddo")
hashTable.insert("a","o")
hashTable.insert("pe","Caddo")
hashTable.remove("pe")
hashTable.remove("Pipe")
hashTable.search("Juan")

hashTable
debugger


