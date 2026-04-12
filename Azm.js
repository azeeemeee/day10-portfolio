const loader = document.getElementById("loader");
const count = document.getElementById("loader-count");
const fill = document.querySelector(".loader-fill");

let progress = 0;
let speed = 1; // smaller = slower

let interval = setInterval(() => {
  progress++;

  count.innerText = progress + "%";
  fill.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);

    // 🔥 EXTRA DELAY so user actually sees it
    setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
      

    }, 800); // pause at 100%
  }

}, speed);




const image = document.querySelector(".hero-profile-img");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX - window.innerWidth / 2) / 25;
  let y = (e.clientY - window.innerHeight / 2) / 25;

  image.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
});

document.addEventListener("mouseleave", () => {
  image.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
});



  window.addEventListener("load", () => {

    // 🔥 LOADER FIX
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("fade-out");
      setTimeout(() => loader.style.display = "none", 500);
    }

    // 🔥 SKILL ANIMATION
    const skillSection = document.querySelector("#skills");
    const fills = document.querySelectorAll(".skill-fill");

    let started = false;

    window.addEventListener("scroll", () => {
      if (!skillSection) return;

      const sectionTop = skillSection.offsetTop - 400;

      if (window.scrollY > sectionTop && !started) {
        fills.forEach(fill => {
          fill.style.width = fill.getAttribute("data-width");
        });
        started = true;
      }
    });

  });

  const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});


// 🔥 FORCE START AT TOP
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});


document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_jpu5ip7", "template_wvuaiip", this)
    .then(() => {
      alert("🔥 Message sent successfully!");
      this.reset(); // optional: clears form
    })
    .catch((error) => {
      alert("❌ Failed to send message");
      console.log(error);
    });
});





window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

window.scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};



window.addEventListener("load", () => {

  const target = document.getElementById("target");
  const scoreEl = document.getElementById("score");
  const box = document.querySelector(".game-box");

  // 🔥 STOP if game doesn't exist
  if (!target || !scoreEl || !box) return;

  let score = 0;
  let speed = 1200;

  function moveTarget() {
    const maxX = box.clientWidth - 40;
    const maxY = box.clientHeight - 40;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";
  }

  moveTarget();

  let gameLoop = setInterval(moveTarget, speed);

  target.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;

    if (speed > 300) {
      speed -= 50;
      clearInterval(gameLoop);
      gameLoop = setInterval(moveTarget, speed);
    }

    moveTarget();
  });

});

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrolled = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = scrolled + "%";
});




window.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".scroll-circle circle.progress");
  const percentText = document.getElementById("scroll-percent");

  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;

  function updateScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    const offset = circumference - (scrollPercent / 100) * circumference;

    circle.style.strokeDashoffset = offset;
    percentText.textContent = Math.round(scrollPercent) + "%";
  }

  window.addEventListener("scroll", updateScroll);
  updateScroll(); // run once on load
});


