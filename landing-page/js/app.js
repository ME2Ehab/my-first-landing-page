/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


const navSection = document.querySelectorAll('section');//selecting all of the section elements
const navID= document.getElementById('navbar__list');//getting the navigation bar by ID(like fetching it)
const fragmentDoc= document.createDocumentFragment();//made a document fragment because it will load in the background and won't be shown(improved performance)
const takeLink = document.querySelectorAll('a');


/**explaining the processs : making the navigation bar by a function to execute a block of code by getting a loop for every section got by the query Selector,
 *  then making a list element and then an anchor then setting the name of the link based on the data_nav(the nav can be replaced but replace it in the code as well)
 * after that we make a href and add a class to the link(anchor) after that we make the list as a parent
 *  and the anchor as the child then the list will be the child of the doc. frag. 
 * and lastly we just add the Doc.Frag. as a child of the navigation bar that we fetched by ID.
 * then we added an event listner which waits till you input a certain thing to execute something 
 * so in my case on click on the section name from the nav bar and after preventing the default action to happen, it scrolls into the section smoothly.
 */

(function makingNavbarList(){
   for (let section of navSection){
    const makeList = document.createElement('li')
    const makeLink = document.createElement('a')
    makeLink.textContent = section.dataset.nav
    theHref= section.getAttribute('id');
    makeLink.href ="#"+theHref
    makeLink.classList.add("menu__link")
    makeList.appendChild(makeLink)
    fragmentDoc.appendChild(makeList)

    makeList.addEventListener("click", function (doIt){
      doIt.preventDefault();
      section.scrollIntoView({behavior:"smooth"})
    })
  }
 })()
navID.appendChild(fragmentDoc);




/** here on scroll (found it in w3schools) and the tutor at discourse helped me
 * so we make a loop that for every section of the section in the navSection query we are gonna do the next
 * make a viewedpart variable that uses the getboundingclient to tell what the viewer is watching now
 * and then another variable for the links which gets the list elements
 *  (the discourse tutor really helped me in this part especially that I was choosing anchor elemnt <a>)
 * then I made a loop for each (because adding the youractiveclass didn't work in the main loop so I tried to make it like this)
 * so the prarameter is viewedNow which means what the user is gonna be watching on their screen and
 *  made an if conditional that if the parameter is in the area of 200 or less and more than the -300 
 * then it would add a new class and if not then it would remove it 
 * (i know the code looks big but I usually fix what I am doing by making a new function just seems easier)
 * and where if the viewedpart where I  made a variable holding the getboundingclient (but was lazy to change the upper code)
 *  and I made another loop and then said that it should remove the class active if it was there and then see if the link content is the same as the dataNav
 * (you can see it in the browser just see the navBar I used it to name the sections in the nvaigation as well) then it would add the class active
 */


window.onscroll = function () {
  for (let section of navSection) {
    const viewdPart = section.getBoundingClientRect();
    const listed = document.querySelectorAll("li");
    //line after the decleration of variables
    navSection.forEach(function(viewedNow){
      if (viewedNow.getBoundingClientRect().top <= 200 && viewedNow.getBoundingClientRect().top >= -300){
        viewedNow.classList.add('youractiveclass');
      }
      else {
        viewedNow.classList.remove('youractiveclass');
       
      }
    });
    //line just to know the function (you can say to make it easier to read)
    if (viewdPart.top > -1000 && viewdPart.top < 300) {
    
      for (let link of listed) {
        link.classList.remove("active");
        if (link.textContent === section.getAttribute("data-nav")) {
          link.classList.add("active");
        }
      }
    }
  }
};


//all of my sources are in the Read ME




