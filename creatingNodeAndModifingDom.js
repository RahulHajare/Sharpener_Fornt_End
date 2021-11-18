let itemList = document.querySelector('#items');
// parentElement
console.log(itemList.parentNode);
// lastelementchild
console.log(itemList.lastElementChild);
// lastchild
console.log(itemList.lastChild);
// firstelementchild
console.log(itemList.firstElementChild);
// firstchild
console.log(itemList.firstChild);
// nextsibling
console.log(itemList.nextSibling);
// nextelementsibling
console.log(itemList.nextElementSibling);
// previoussibling
console.log(itemList.previousSibling);
// previousElementsibling
console.log(itemList.previousElementSibling);

// createelement
let newDiv = document.createElement('div');
// setAttribute
newDiv.setAttribute('title', 'HelloDiv');
newDiv.className = 'Hello1';
// createtesxtnode
let newDivText = document.createTextNode('Hello World');
// appendchild
newDiv.appendChild(newDivText);
newDiv.style.fontSize = '25px';

// Now go head and add HEllo word before Item Lister
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
// Now go head and add HEllo word before Item 1
let listGroup = document.querySelector('header .container');
let ul = document.querySelector('header ul');
listGroup.insertBefore(newDiv, ul);