// function myFunction() {
//     var element = document.body;                         //function for dark mode in body
//     element.classList.toggle("dark-mode");

// }

// // ---------------------------create & Add element --------------------------------------------------------

// let newText= document.createTextNode("My Name is Kamran")
// document.body.appendChild(newText)

// // ------------------Creating html element & adding text -------------------------------------------------

// let newElement =document.createElement("h1")
// let textInside=document.createTextNode("\nHello World")
// let print=newElement.appendChild(textInside)
// document.body.appendChild(print)

// // -----------------------Nested elements------------------------------------

// div= document.createElement("div")
// para=document.createElement("p")
// text=document.createTextNode("I am the paragraph here")
// para.appendChild(text)
// div.appendChild(para)

// document.body.appendChild(div)

// // --------------- creating and adding list of elements------------------

// list=document.getElementById("shop")
// num1=document.createElement("li")
// num1.textContent="Chicken"

// num2=document.createElement("li")
// num2.textContent="Milk"

// num3=document.createElement("li")
// num3.textContent="Bread"

// list.appendChild(num1)
// list.appendChild(num2)
// list.appendChild(num3)


// // -------------------------------Removing element------------------------------

// list.removeChild(list.lastElementChild)
// list.removeChild(list.firstElementChild)
// list.removeChild(num1)

// // while(list.firstChild){
// //     list.removeChild(list.firstChild)
// // }

// // -------------------------Event listener/event handler--------------------------------------



// let h=document.getElementById("myHeading")
// h.style.textAlign="center"

// function div1Click(){
//     alert("Div 1 clicked")
// }
// function btn1Click(){
//     alert("btn1 clickd")
// }


// let div2=document.getElementById("div2")
// let btn2=document.getElementById("btn2")

// let divAlert =() =>{
//     alert("Event alert div2")
// }

// let btn2Alert=()=>{
//     alert("Event alert btn2 clicked")
// }

// div2.addEventListener("click",divAlert,{capture:false}) //by default capture is false and its optional to write in code if value is
// btn2.addEventListener("click",btn2Alert,{capture:false})

// div2.addEventListener("dblclick",divAlert,{capture:false})
// btn2.addEventListener("dblclick",btn2Alert,{capture:false})

// btn2.removeEventListener("click",btn2Alert)
// ---------------------Modifying CSS---------------------------------------------------

let h= document.getElementById("myHeading")
h.style.color="#11F"

h.style.cssText+="color:red;background-color:yellow"

let heading=document.querySelector("h1")
console.log(heading.className)

/ h.setAttribute('style','color:red;background-color:yellow');



//class name

para = document.querySelector("p")
console.log(para.className) 

//class list
d = document.querySelector('div')
d.classList
d.classList.add("class3")

//removing elements class
d.classList.remove("class4");

