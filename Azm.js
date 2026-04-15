window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const count = document.getElementById("loader-count");
  const fill = document.querySelector(".loader-fill");

  const images = Array.from(document.images);
  const videos = Array.from(document.querySelectorAll("video"));

  const assets = [...images, ...videos];
  const total = assets.length;

  let loaded = 0;
  let progress = 0;      // real progress
  let display = 0;       // shown progress (smooth)

  // 🔥 Smooth animation loop
  function animate() {
    display += (progress - display) * 0.08; // easing

    const shown = Math.floor(display);

    count.textContent = shown + "%";
    fill.style.width = shown + "%";

    if (display < 100) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.6s ease";

        setTimeout(() => {
          loader.style.display = "none";
        }, 600);
      }, 300);
    }
  }

  

  function updateProgress() {
    loaded++;
    progress = Math.floor((loaded / total) * 100);
  }

  // If no assets
  if (total === 0) {
    progress = 100;
    animate();
    return;
  }

  // Track images
  images.forEach(img => {
    if (img.complete) {
      updateProgress();
    } else {
      img.addEventListener("load", updateProgress);
      img.addEventListener("error", updateProgress);
    }
  });

  // Track videos
  videos.forEach(video => {
    if (video.readyState >= 3) {
      updateProgress();
    } else {
      video.addEventListener("loadeddata", updateProgress);
      video.addEventListener("canplaythrough", updateProgress);
      video.addEventListener("error", updateProgress);
    }
  });

  animate();
});




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


const canvas = document.getElementById("tech-particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = document.querySelector("#tech").offsetHeight;

  let particles = [];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(56,189,248,0.5)";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector("#tech").offsetHeight;
  });
}


const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

/* track mouse */
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

/* smooth follow (INERTIA) */
function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.20;  // lower = more lag
  outlineY += (mouseY - outlineY) * 0.20;

  outline.style.left = outlineX + "px";
  outline.style.top = outlineY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();


document.addEventListener("mousedown", () => {
  document.body.style.cursor = "none";
});

document.addEventListener("mouseup", () => {
  document.body.style.cursor = "none";
});




const items = document.querySelectorAll(".project-thumb");
const modal = document.getElementById("caseStudy");
const closeBtn = document.querySelector(".close-btn");

items.forEach(item => {
  item.addEventListener("click", () => {
    modal.classList.add("active");
  });
});




window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

document.querySelectorAll(".project-item")



// localStorage.setItem("music", "on");
// music.volume = ;
// let fade = setInterval(() => {
//   if (music.volume < 1) {
//     music.volume += 0.05;
//   } else {
//     clearInterval(fade);
//   }
// }, 100);



