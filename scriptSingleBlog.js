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
}



window.addEventListener("scroll", debounce(ckeckNavbar, 10, 8000));











const textArea = document.querySelector(".comment-form form .textarea-input textarea");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const formSBtn = document.querySelector("#form-s-btn");

const commentArea = document.querySelector(".comment-area")


formSBtn.addEventListener("click" , () => {
  if (!textArea.value || !nameInput.value || !emailInput.value) {
      alert("Please fill the boxes");
  }else
  {
    var d = new Date();
    var n = d.toLocaleDateString()+ " at " + d.toLocaleTimeString();

    const newComment = document.createElement("div")
    newComment.classList.add("comments-list")
    newComment.innerHTML = `
              <div class="comment-list d-flex">
                <div class="comment-img-con">
                  <img class="comment-img" src="images/commentor (${Math.ceil(Math.random()*3)}).webp" alt="">
                </div>
                <div class="desc">
                  <h4 class="the-comment">
                    ${textArea.value}
                  </h4>
                  <div class="comment-info d-flex align-items-center">
                    <a href="">
                      <h4>${nameInput.value}</h4>
                    </a>
                    <p>
                      ${n}
                    </p>
                  </div>
                </div>
              </div>
            `
    commentArea.appendChild(newComment);
    textArea.value = ""
    nameInput.value = ""
    emailInput.value = ""
    console.log(document.querySelector(".comment-area h4 span").textContent =  document.querySelectorAll(".comments-list").length);
  }

})

















/**/
