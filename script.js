const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

/*  Global window object */
/*  pageYOffset - returns the distance in pixels that is being scrolled
    offsetTop - returns the distance from the top edge of page to the element
    Once they are equal it means the navbar has reached the top of the page
*/
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 
  navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  
  sections.forEach(section, i) => {
      if(window.pageYOffset >= section.
         offsetTop - 10) {
          navbarLinks[i].classList.add
          ('change');
    }
  })  
  
});  























