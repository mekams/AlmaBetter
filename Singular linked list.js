class Node{                         //Node structure by class Node
    constructor(d){
        this.data=d
        this.next=null
    }
}

class linkedList{               // class linked list for travelling 
    constructor(h){
        this.head=h                 //head pointer to the first node 
    }


    printLinkedlist = function(){           //Function to print linked list
        let currentNode = this.head
        while(currentNode !== null){
            console.log(currentNode.data)
            currentNode=currentNode.next
        }
    }

    size = function(){                      //function to print size of linked list
        let count =0;
        let currentNode=this.head
        while(currentNode !==null){
            count++
            currentNode=currentNode.next
        }
        console.log(`The size is ${count}`)
    }

    getfirstNode = function(){              // function to return firstNode data
        return this.head.data
    }
    
    getlastNode = function(){               //function to return last node data
        let currentNode=this.head
        while(currentNode.next !== null){
            currentNode=currentNode.next
        }
        console.log(currentNode.data)
    }

    getAt = function(index){
        let counter =0
        let tempNode = this.head
        while(tempNode){
            if(counter===index){
                return tempNode
            }else{
                counter++
                tempNode=tempNode.next
            }
        }
        return null
    }

    insertatBeginning = function(data){          //insert a node at beginning
        let newNode= new Node(data)
        newNode.next = this.head
        this.head = newNode
        // return this.head
    }

    insertatend = function(data){
        let newNode = new Node(data)
        let tempNode= this.head
        while(tempNode.next !== null){
            tempNode =tempNode.next
        }
        tempNode.next =newNode
        newNode.next = null
    }
}

let n1 = new Node(12)                       //initialising objects to traverse by class and  creating nodes
let n2 = new Node(25)
let n3 = new Node(32)
let n4 = new Node(80)

n1.next=n2                                    //manual linking of nodes
n2.next=n3
n3.next=n4

let list =new linkedList(n1)                  // initialising linked list


list.printLinkedlist()

list.size()
console.log(list.getfirstNode())

list.getlastNode()
console.log(list.getAt(1).data)

list.insertatBeginning(909)
list.insertatBeginning(203)
list.printLinkedlist()

list.insertatend(786)
list.printLinkedlist()