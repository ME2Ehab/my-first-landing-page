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



/**explaining the processs : making the navigation bar by a function to execute a block of code by getting a loop for every section got by the query Selector,
 *  then making a list element and then an anchor then setting the name of the link based on the data_nav(the nav can be replaced but replace it in the code as well)
 * after that we make a href and add a class to the link(anchor) after that we make the list as a parent
 *  and the anchor as the child then the list will be the child of the doc. frag. 
 * and lastly we just add the Doc.Frag. as a child of the navigation bar that we fetched by ID.
 */

(function makingNavbarList(){ for (const section of navSection){
    const makeList = document.createElement('li')
    const makeLink = document.createElement('a')
    makeLink.textContent = section.dataset.nav
    theHref= section.getAttribute('id');
    makeLink.href ="#"+theHref
    makeLink.classList.add("menu__link")
    makeList.appendChild(makeLink)
    fragmentDoc.appendChild(makeList)
  }
 })()
navID.appendChild(fragmentDoc);






//here we made a function just to remove the class (had to change the class name from your-active-class into youractiveclass) because it didn't work with the first name.
//and it work by fetching the first section and then removing it's class
(function removeclass(){
  sectionx= document.getElementById('section1')
sectionx.classList.remove('youractiveclass');
})()

// Scroll to anchor ID using scrollTO event
/** made a function that would execute immediatly then added an event listner by the click on the link in nav it would start the event of preventing the default action
 * then it would fetch the href and start without the '#' then making it a constant to recall it faster and then made that by scrolling it would make a smooth scroll..
 * .. toward the section(commented out because it is not working (will work on it later just to meet the rubric requirments first))
 */
/**(function scrllIt(){
makeLink.addEventListner('click', (evt) =>{
  evt.preventDefault();
const startingSection = document.getElementById(evt.target.getAttribute('href').subString(1));
  startingSection.scrollIntoView({
   behavior:'smooth',
   block: 'center'
  });
});
})()*/



//here is the function of responsive burger nav (found it in w3schools but will work on it later)
/**(function burgerMenu(){
  
})()*/

/** here on scroll (found it in w3schools)
 * we make a function with a parameter called (viewed now) like what is on the screen so after a test it came as 150 and -400 for me 
 * so As the webinar stated we remove all classes just the function up there and then we make that by scrolling this function would work and should have a conditional
 * so in case that thing is more or equal than -500 in the view and at the same time it is less or equal than 100 then it would add the yourActiveClass
 * ps. there is gap between Albert Einstein and stephen hawking where the class isn't active even after several tests and change in numbers.
 * the list doesn't work for some reason so I commented it out till I fix it.
 */
window.onscroll = function() {
  navSection.forEach(function(viewedNow){
    //const fetchNavList = document.querySelectorAll('li');
    if (viewedNow.getBoundingClientRect().top <= 100 && viewedNow.getBoundingClientRect().top >= -500){
      viewedNow.classList.add('youractiveclass');
     // fetchNavList.classList.add('active');
    }
    else {
      viewedNow.classList.remove('youractiveclass');
     // fetchNavList.classList.remove('active');
    }
  });
}
//all of my sources are in the Read ME


 
