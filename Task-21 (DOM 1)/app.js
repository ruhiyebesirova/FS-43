//<h1>GeForce 20</h1>
//<ul>
    //<li>GTX 1650</li>
    //<li>GTX 1660</li>
    //<li class "primary">GTX 1660</li>
    //<li>GTX 1670</li>
    //<li>GTX 1680</li>
  //  <li class "primary">GTX 1660</li>
//</ul>


//Task 1
const listItem = document.querySelector("ul li");
console.log(listItem);

//Task 2
document.querySelector("h1").remove();

const list = document.querySelector("ul");
list.innerHTML = `
    <li>GTX 1650</li>
    <li>GTX 1660</li>
    <li class "primary">GTX 1660</li>
    <li>GTX 1670</li>
    <li>GTX 1680</li>
    <li class "primary">GTX 1660</li>
    <li>TITAN RTX</li>
`;

//Müəllim deyən yol
const titles  = document.querySelector("h1");
titles.remove();

const list = document.querySelector("ul");
const newListItem = document.createElement("li");
newListItem.textContent = "TITAN RTX";

list.appendChild(newListItem);

/*append və appendChild elementi ən sona əlavə edir*/
/*prepend elementi ən əvvələ əlavə edir*/

//Task 3
const title = document.querySelector("h1");
title.textContent = "GeForce 20 Series";

const primaryBtns = document.querySelectorAll(".primary");
primaryBtns.forEach((btn) => {
    btn.style.backgroundColor = "#ebebeb";
});

//Task 4
const primary = document.querySelectorAll(".primary");
primary.forEach((btn) => {
    console.log(listItem.textContent);
});

//Task 5
//?

/*Müəllim deyən yol*/
const listItems = document.querySelectorAll("li");

listItems.forEach((li) =>{
    li.classList.add("item");
   
    if(li.classList.contains("primary")) {
        li.classList.add("secondary");
    }
});


