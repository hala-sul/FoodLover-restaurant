// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const title = document.getElementById("mainTitle");
const text = title.innerText;
title.innerText = "";
let i = 0;

function typeWriter(){
  if(i < text.length){
    title.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();
  
  // Sticky Navbar
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if(window.scrollY > 100){
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  
  // Fade In Animation
  const fadeElements = document.querySelectorAll(".fade-in");
  
  window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if(position < window.innerHeight - 100){
        el.classList.add("show");
      }
    });
  });
  
  // Contact Form
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");
  
  form.addEventListener("submit", function(e){
    e.preventDefault();
    successMessage.style.display = "block";
    form.reset();
  });
  
  // Dark Mode
  const toggle = document.getElementById("darkModeToggle");
  
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Scroll Reveal
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});
// Menu Filter
const filterButtons = document.querySelectorAll(".menu-filter button");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    menuItems.forEach(item => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
// let cartCount = 0;
// const cartDisplay = document.getElementById("cart-count");
// const addButtons = document.querySelectorAll(".add-to-cart");

// addButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     cartCount++;
//     cartDisplay.textContent = cartCount;
//   });
// });
// Rating System
const ratings = document.querySelectorAll(".rating");

ratings.forEach(rating => {
  const stars = rating.querySelectorAll("span");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    });
  });
});
const modal = document.getElementById("foodModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close-btn");

//const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    const title = item.querySelector("h3").childNodes[0].textContent;
    const desc = item.querySelector("p").textContent;
    const price = item.querySelector("span").textContent;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const nameInput = document.getElementById("Name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("Massage");
//const successMessage = document.querySelector(".success-message");
const charCount = document.querySelector(".char-count");

messageInput.setAttribute("maxlength", "200");

messageInput.addEventListener("input", () => {
  charCount.textContent = messageInput.value.length + " / 200";
});


  

  

  
  

  
const daytimeItems = document.querySelectorAll(".daytime-item");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  daytimeItems.forEach((item, index) => {
    const boxTop = item.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 200);
    }
  });
});