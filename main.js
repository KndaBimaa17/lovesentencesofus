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

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    let images = document.querySelectorAll(".image");

    images.forEach(function (image) {
      let description = document.createElement("div");
      description.classList.add("description");
      description.textContent = image.dataset.text;
      image.appendChild(description);

      let mobileButton = document.createElement("div");
      mobileButton.classList.add("mobile-button");
      mobileButton.textContent = "View The Stories";
      image.appendChild(mobileButton);

      mobileButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Menghentikan event klik gambar dari mempengaruhi deskripsi
        description.classList.toggle("active");
        mobileButton.style.display = "none";

        let closeButton = document.createElement("span");
        closeButton.innerHTML = "X";
        closeButton.classList.add("close-button");
        description.appendChild(closeButton);

        closeButton.addEventListener("click", function (event) {
          event.stopPropagation();
          description.classList.remove("active");
          mobileButton.style.display = "block";
          closeButton.remove();
        });
      });
    });

    // Menambahkan event listener ke setiap gambar untuk menyembunyikan deskripsi saat diklik di bagian lain
    document.addEventListener("click", function (event) {
      if (!event.target.classList.contains("mobile-button")) {
        images.forEach(function (image) {
          let description = image.querySelector(".description");
          description.classList.remove("active");
          let mobileButton = image.querySelector(".mobile-button");
          mobileButton.style.display = "block";
          let closeButton = image.querySelector(".close-button");
          if (closeButton) {
            closeButton.remove();
          }
        });
      }
    });
  }
});

// Close navbar when clicking anywhere on the screen
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !toggleNav.contains(event.target)) {
    navbar.classList.remove("show");
  }
});
