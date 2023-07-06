/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar"),
    navToggle = document.getElementById("nav_toggle"),
    navClose = document.getElementById("nav_close");

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_sidebar");
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_sidebar");
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data_content]')
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
})

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item');

function activeWork() {
    linkWork.forEach(e => e.classList.remove('active_work'))
    this.classList.add('active_work');
}

linkWork.forEach(e => e.addEventListener("click", activeWork));


/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
        tooglePortfolioPopup();
        portfolioitemDetails(e.target.parentElement);
    }
})

function tooglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup_close").addEventListener("click", tooglePortfolioPopup);

function portfolioitemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal_close')

let modal = function (modelClick) {
    modalViews[modelClick].classList.add('active_modal')
}

modalBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener("click", () => {
        modal(i)
    })
})

modalCloses.forEach((modelClose) => {
    modelClose.addEventListener("click", () => {
        modalViews.forEach((model) => {
            model.classList.remove('active_modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        }
    }
})

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");
function focusFun() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}
function blurFun() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", blurFun)
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")
window.addEventListener("scroll", navHighlighter)
function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id")
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active")
        } else {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active")
        }
    })
}
/*=============== SHOW SCROLL UP ===============*/


/*=============== TYPED JS ===============*/

// const typed = new Typed(".multi-text", {
//     strings: ["Full Stack Web Developer", "JAVA Backend Developer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });
