const { size } = require("lodash")

class Node{
    constructor(d){                         //initialising data , prev and next for a node
        this.data = d
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor(node){                      //initialising head and tail node 
        this.head = node
        this.tail = node
    }

    printLinkedList = function(){               // printing function
        let temp= this.head
        while(temp !== null){
            console.log(temp.data)
            temp = temp.next
        }
    }

    size = function(){                          // size function for linked list
        let temp = this.head
        let counter = 0
        while(temp !== null){
            temp = temp.next
            counter++
        }
        return counter
    }

    insertatBeginning= function(data){          //insert at start of linked list
        let newNode = new Node(data)
        let temp = this.head
        if(!temp){                                  //edge or boundary condition
            this.head =node
            this.tail = node
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    insertatEnd = function(data){                       //insert at end of linked list
        let node = new Node(data)
        let temp = this.tail
        if(!temp){                                      //edge or boundary condition
            this.head = node
            this.tail = node
        }else{
        node.prev = this.tail
        this.tail.next =node
        this.tail = node
        }
    }

    insertat = function(data, position){            //user  given index inserting a node
        let node = new Node(data)
        let index = 0   
        let current = this.head
        while(index < position){
            current = current.next
            index++
        }
        node.next = current
        node.prev = current.prev
        current.prev.next = node
        current.prev =node
    }

    deleteatstart = function(){                 //delete at start
        let length = size()
        if(length ===1){
            this.head =null
            this.tail =null
        }else{
        this.head = this.head.next
        }
    }

    deleteatend = function(){                       //delete at end
        let prevNode = this.tail.prev
        prevNode.next = null
        this.tail.prev =null
        this.tail = prevNode
    }

    deleteat = function(position){
        let current = this.head
        let index =0 
        while(index !== position){          // or while(index < position)
            index++
            current = current.next
        }
        current.prev.next =current.next
        current.next.prev = current.prev

    }
}

let n1 = new Node(21)

let list = new LinkedList(n1)

console.log(`The size is:`,list.size())

list.printLinkedList()

console.log(`\nInsert at Beginning`)
list.insertatBeginning(60)
list.printLinkedList()

console.log(`\nInsert at End`)
list.insertatEnd(80)
list.insertatEnd(70)
list.insertatEnd(33)
list.printLinkedList()


console.log(`\nInsert at given position or index`)
list.insertat(37, 1)
list.printLinkedList()

console.log(`\Delete at start`)
list.deleteatstart()
list.printLinkedList()

console.log(`\Delete at end`)
list.deleteatend()
list.printLinkedList()

console.log(`\Delete at given index`)
list.deleteat(2)
list.printLinkedList()