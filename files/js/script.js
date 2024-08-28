document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".video-btn");
  const popup = document.getElementById("video-popup");
  const closePopup = document.getElementById("close-popup");
  const videoFrame = document.getElementById("video-frame");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const videoUrl = button.getAttribute("data-video");
      videoFrame.src = videoUrl;
      popup.style.display = "flex";
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    videoFrame.src = ""; // Stop the video
  });

  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
      videoFrame.src = ""; // Stop the video
    }
  });
});

let header = document.querySelector(".header");
let content = document.querySelector(".content");

window.onscroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("bg-black-100");
  } else {
    header.classList.remove("bg-black-100");
  }
};

function adjustPaddingTop() {
  const headerHeight = header.offsetHeight;
  content.style.paddingTop = headerHeight + "px";
}

// Call the function initially
adjustPaddingTop();

// Adjust on window resize
window.addEventListener("resize", adjustPaddingTop);

var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

var i = 0;
var count = 1; // Initialize count to start from 1
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("Bar");
    var countSpan = document.querySelector(".countSpan");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        // Increment count, reset to 1 if it exceeds 5
        count++;
        if (count > 5) {
          count = 1;
        }
        // Update countSpan with the new count value
        countSpan.textContent = count.toString().padStart(2, "0"); // Pad with leading zero
        // Delay before restarting the loop
        setTimeout(move, 1000);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
// Start the loop when the page loads
window.onload = function () {
  move();
};

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.tab);

      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      target.classList.add("active");
    });
  });
});
