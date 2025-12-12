// 1. Parent Node
const mainContainer = document.getElementById('main-container');

// 2.create childNode
const placesSection = document.createElement('section');

//create h1
const h1 = document.createElement('h1');
h1.innerText = "Places I want to visit";
placesSection.appendChild(h1);

//create ul
const ul = document.createElement('ul');
placesSection.appendChild(ul);
let li1 = document.createElement('li');
li1.innerText = "Sajek";
ul.appendChild(li1);
let li2 = document.createElement('li');
li2.innerText = "BandorBon";
ul.appendChild(li2);
let li3 = document.createElement('li');
li3.innerText = "Coxs Bazar";
ul.appendChild(li3);

// 3.append places section to the main container
mainContainer.appendChild(placesSection);



//easier to create HTMl
const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1>Books I want to read</h1>
<ul>
<li>Physics</li>
<li>Chemistry</li>
<li>Math</li>
</ul>
`;
mainContainer.appendChild(booksSection);