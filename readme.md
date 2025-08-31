1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
getElementById is a javascript method that we use to find a specific element from an html document by its id. The id that we put in getElementById must always be unique and the id that we give will find the element that has it. If the id that we give in getElementById does not exist in the html collection, then it will show nul.

GetElementByClassName is a JavaScript method that is used to extract all elements with the same class name from an HTML document. If the class given in GetElementByClassName is not present in the HTML document, then it will return an empty html collection. It returns an HTML collection. It is similar to an array but not a complete array.

querySelector() is a method of JavaScript that can be used to find an element from an HTML document using CSS selectors. And it only extracts the first one it finds. If it does not find that selector or class name or id name like h1, p, li, id, class etc. then it returns null.

querySelectorAll() is a JavaScript method that can be used to find an element in an HTML document using CSS selectors. Unlike CSS selectors, it does not just retrieve the first element it finds, but it retrieves all the elements that have the same CSS selector name, class name, or ID name. It returns a list of notes. It is like an array, but not a complete array. If it does not find a selector, class name, or ID name, such as h1, p, li, id, class, etc., it returns an empty list of notes with a length of zero.



2.How do you create and insert a new element into the DOM?

Answer:
To create a new element, we need to use createElement(). 
Now suppose I have a container in this html document.
for example: <div id="container"><div>    

Then first we need to declare a variable in the JavaScript.
for example: let element = document.createElement("div")

Then we can add whatever we want, such as p, div, h1 etc.
for example: element.innerHtml = `<h1>This is an example.</h1>`

Next we need to add the element to the container.
for example:
let container = document.getElementById("container")
container.appendChild(element);

This is how to create and insert a new element in the DOM.



3.What is Event Bubbling and how does it work?

Answer:
When an event occurs on a dom element, it starts from the innermost element and gradually moves up to the parent until it reaches the document.

Let's say there is an HTML file below.
<div id="parent">
<button id="child">Click me<button>

Suppose there is a javascript file below.
document.getElementById('child')
.addEventListener('click', function(){
    console.log('Button Clicked')
})

document.getElementById('parent')
.addEventListener('click', function(){
    console.log('Parent div clicked')
})

Now when I control it, the output will be the first button click.Then it will rise to the parent.



4.What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation is a technique in Java Script where we can handle each of our children by adding an event listener to their parent or common parent, rather than adding event listeners to each of our child elements individually.

If there are ten child elements and we need to set event listeners for ten of them separately, then we need to set ten event listeners. But through event delegation, we can handle all the children by adding only one event listener to the parent. Therefore, no matter how many children we add, we can handle all the children through a single event. This will consume less memory and the browser will be faster. Later, if we add a new child element to the parent element, we will not need to add a new handler, it will be handled automatically.



5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() is a method that stops an element from doing its default or own thing, meaning it will no longer do what it was doing.

stopPropagation() is a method that prevents an event from bubbling up to its parent element, meaning the event only stops at its targeted element, meaning it will only stay at that layer and will not be shared to any subsequent layer, it will stop there.