// SCROLL BUTTON
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// SCROLL BUTTON END

// POP UP START
const authorSpan = document.getElementById("author");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

authorSpan.addEventListener("click", function () {
  popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
// POP UP END

//NAVBAR FOR MOBILE
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
const toggleNav = document.querySelector("#toggle-nav");

toggleNav.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Get all the "Home" links in the navbar
const homeLinks = document.querySelectorAll('.navbar-nav a[href^="#check"]');

// Attach click event listeners to each link
homeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior

    const targetId = link.getAttribute("href"); // Get the target ID from the link's href attribute
    const targetRadio = document.querySelector(targetId); // Find the corresponding radio input element

    if (targetRadio) {
      targetRadio.checked = true; // Check the radio input
    }

    navbar.classList.remove("show"); // Hide the navbar after clicking a link
  });
});
