function debounce(func, wait = 90, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const bradcamArea = document.querySelector(".bradcam_area");
const nav = document.querySelector(".header-area")
const navDropdowns = document.querySelectorAll(".dropdown-menu")
const navDropdownsA = document.querySelectorAll(".dropdown-toggle")

function ckeckNavbar() {
  if (window.scrollY >= bradcamArea.offsetHeight - 300) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
  navDropdowns.forEach((navDropdown) => {
    navDropdown.classList.remove("show")
  })
  navDropdownsA.forEach((navDropdowna) => {
    navDropdowna.classList.remove("show")
  })
  visibility()
}



window.addEventListener("scroll", debounce(ckeckNavbar, 10, 8000));




// visibility

const services = document.querySelector(".services")


function visibility(){
  const boxTop = services.getBoundingClientRect().top
  if (boxTop < 350) {
    services.classList.remove("hide");
    services.classList.add("show-anim");
  }
}


$(document).ready(function(){


    $('.testimonial-car').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
          0:{
            items:1
          },
            1000:{
                items:1
            }
        }
    });


});
