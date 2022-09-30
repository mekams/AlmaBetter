class Node{                                    // Node structure
    constructor(d){
        this.data = d
        this.next = null 
    }
}

class linkedList{                               // class linked list for travelling
    constructor(h){
        this.head = h
    }
    printLinkedlist = function(){               //function to print linked list
        let temp = this.head
        while(temp !== null){
            console.log(temp.data)
            temp = temp.next
        }
    }

    size = function(size){                      //size of linked list
        let counter =0
        let temp = this.head
        while(temp !== null){
            counter ++
            temp = temp.next
        }
        console.log('The size of linked list is:',counter)
    }

    getfirstNode = function(){                  // function to get first node      
        console.log ('The first node is:',this.head.data)
    }

    getlastNode = function(){                   // function to get last node
        let temp = this.head
        while(temp.next !== null){
            temp =temp.next
        }
        console.log('The last node is:',temp.data)
    }

    getatIndex = function(index){               // function to print node ofgiven index 
        let counter = 0
        let temp = this.head
        while(temp){
            if(counter === index){
                return temp
            }
            else{
                counter++
                temp = temp.next
            }
        }
        return null
    }
    
    insertatBeginning = function(data){          // function to inser anelement at beginning of linked list
        let temp = this.head
        let newNode = new Node(data)
        newNode.next = this.head
        this.head =newNode
    }

    insertatEnd = function(data){                   //function  to insert node at end
        let temp = this.head
        let newNode = new Node(data)
        while(temp.next !== null){
            temp = temp.next
        }
        temp.next = newNode
    }

    insertuserIndex = function(data,index){             //function to insert node at desired Index
        let newNode = new Node(data)
        let prev = this.getatIndex(index-1)
        newNode.next = prev.next
        prev.next = newNode
        return this.head
    }
    
    deleteFirstNode = function(){                   //function to delete first node
        this.head = this.head.next
        return this.head
    }

    deletelastNode = function(){                    // function to delete  a last node
        let temp = this.head                       //or---> n1=this.head -->>n2 =this.head.next
        while(temp.next.next !==null){             //or while(n2.next !==null){
            temp = temp.next                       //or     n1 = n2 --->>n2 = n2.next
        }                                               
        temp.next =null                            //or      n1.next = null
        return this.head
    }

    deleteatIndex = function(index){
        if(!this.head){                             //boundary condition
            return
        }

        if(index===0){                              //method call which is already created
            this.deleteFirstNode()
        }
        let prev = this.getatIndex(index-1)          //invoking a function  
        if(!prev || !prev.next){                    //boundary condition
            return
        }
        prev.next =prev.next.next
    }

    search = function(value){                       //searching a node in linked list using function
        let currentNode = this.head
        while(currentNode !== null){
            if(currentNode.data===value){
                return true
            }else{
                currentNode =currentNode.next
            }
        }
        return false
    }

    clear = function(){
        this.head = null
    }
}

let n1  = new Node(23)                          // node objects
let n2  = new Node(42)
let n3  = new Node(71)
let n4  = new Node(84)

n1.next =n2                                 //manually linking nodes
n2.next =n3
n3.next =n4

let list = new linkedList(n1)               // linked list object


list.printLinkedlist()

list.size()

list.getfirstNode()

list.getlastNode()

console.log('The data at index is :',list.getatIndex(3).data)

console.log('Insert in the Beginning')
list.insertatBeginning(50)
list.insertatBeginning(60)
list.printLinkedlist()

console.log('Insert at the End ')
list.insertatEnd(98)
list.insertatEnd(99)
list.printLinkedlist()

console.log('Insert in any index ')
list.insertuserIndex(30,2)
list.insertuserIndex(4,3)
list.printLinkedlist()

console.log('Delete at start')
list.deleteFirstNode()
list.printLinkedlist()

console.log('Delete at end')
list.deletelastNode()
list.printLinkedlist()

console.log('Delete at any point')
list.deleteatIndex(2)
list.printLinkedlist()

console.log(`\n`)
console.log(`Node found in linked list is: ${list.search(23)}`)
console.log(`\n`)

console.log(`Clearing the linked list as below no elements are displayed`)
list.clear()
list.printLinkedlist()