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

const theBlogs = [
  {
    imgSrc:"images/blog-page-images (1).webp",
  },
  {
    imgSrc:"images/blog-page-images (2).webp",
  },
  {
    imgSrc:"images/blog-page-images (3).webp",
  },
  {
    imgSrc:"images/blog-page-images (4).webp",
  },
  {
    imgSrc:"images/blog-page-images (5).webp",
  },
  {
    imgSrc:"images/blog-page-images (6).webp",
  },
  {
    imgSrc:"images/blog-page-images (7).webp",
  },
  {
    imgSrc:"images/blog-page-images (8).webp",
  },
  {
    imgSrc:"images/blog-page-images (9).webp",
  },
  {
    imgSrc:"images/blog-page-images (10).webp",
  },
  {
    imgSrc:"images/blog-page-images (1).webp"
  },
  {
    imgSrc:"images/blog-page-images (4).webp",
  },
  {
    imgSrc:"images/blog-page-images (5).webp",
  },
  {
    imgSrc:"images/blog-page-images (8).webp",
  },
  {
    imgSrc:"images/blog-page-images (7).webp",
  },
  {
    imgSrc:"images/blog-page-images (2).webp",
  },
  {
    imgSrc:"images/blog-page-images (3).webp",
  },
  {
    imgSrc:"images/blog-page-images (6).webp",
  },
  {
    imgSrc:"images/blog-page-images (7).webp",
  },
  {
    imgSrc:"images/blog-page-images (9).webp",
  }
]

const pageNumbers = document.querySelectorAll(".page-number");
const blogsContainer = document.querySelector(".left-blog-area-blogs-con");
var blogsSelected  = [];

pageNumbers.forEach((pageNumber) => {
  pageNumber.addEventListener("click" , () => {

    const pageNumberSelected = pageNumber.textContent ;//take the number use clicked

    pageNumbers.forEach((pageNumber) => {
      pageNumber.classList.remove("active");
    })
    pageNumber.classList.add("active");


    blogsSelected  = [];
    for (var i = (pageNumberSelected-1) *5; i < pageNumberSelected*5; i++) {
      const blogSelecting = `<article class="blog_item">
        <div class="blog_item_img">
          <img class="card-img rounded-0" src="${theBlogs[i].imgSrc}" alt="" data-pagespeed-url-hash="2988835027">
          <a href="#" class="blog_item_date">
            <h3>15</h3>
            <p>Jan</p>
          </a>
        </div>
        <div class="blog_details">
          <a class="d-inline-block" href="single-blog.html">
            <h2>Google inks pact for new 35-storey office</h2>
          </a>
          <p>That dominion stars lights dominion divide years for fourth have don't stars is that
            he earth it first without heaven in place seed it second morning saying.</p>
          <ul class="blog-info-link">
            <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
            <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
          </ul>
        </div>
      </article>`;

      blogsSelected.push(blogSelecting)
    }
    postingBlogs();
  })

})
function postingBlogs()
{
  blogsContainer.innerHTML = blogsSelected.join(" ");
}
















/**/
