// function bS(arr, val, s, e){
//     if(s>e){
//         return
//     }
//     let m = Math.floor((s+e)/2);

//     if(arr[m]===val){
//         return m
//     }
    
//     if(arr[m]>val){
//         return bS(arr, val, s, m-1)
//     }
//     else{
//         return bS(arr,val, m+1, e)
//     }
// }

// const arr= [1, 2, 3, 4, 5,60]
// let pos =(bS(arr,3,0,arr.length-1))

// if(pos>=0){
//     console.log(`The element found at index ${pos}`)
// }else{
//     console.log(`Not found`)
// }




// let recursiveFunction = function (arr, x, start, end) {
	
// 	// Base Condition
// 	if (start > end) return false;

// 	// Find the middle index
// 	let mid=Math.floor((start + end)/2);

// 	// Compare mid with given key x
// 	if (arr[mid]===x) return mid;
		
// 	// If element at mid is greater than x,
// 	// search in the left half of mid
// 	if(arr[mid] > x)
// 		return recursiveFunction(arr, x, start, mid-1);
// 	else

// 		// If element at mid is smaller than x,
// 		// search in the right half of mid
// 		return recursiveFunction(arr, x, mid+1, end);
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 1;

// console.log(recursiveFunction(arr, x, 0, arr.length-1))

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

    insertatEnd = function(data){
        let temp = this.head
        let newNode = new Node(data)
        while(temp.next !== null){
            temp = temp.next
        }
        temp.next = newNode
    }

    insertuserIndex = function(data,index){
        let newNode = new Node(data)
        let prev = this.getatIndex(index-1)
        newNode.next = prev.next
        prev.next = newNode
        return this.head
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
// list.insertuserIndex(4,3)
list.printLinkedlist()