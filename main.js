document.addEventListener('DOMContentLoaded', () => {


  // Typing animation
  const phrases = ["Frontend Engineer", "Mobile App Developer", "Data Analyst"];
  let i = 0, j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isPaused = false;
  let pauseCounter = 0;
  const pauseTime = 15;

  const loop = () => {
    const el = document.getElementById("text");
    el.innerHTML = currentPhrase.join("");

    if (isPaused) {
      pauseCounter++;
      if (pauseCounter >= pauseTime) {
        isPaused = false;
        pauseCounter = 0;
      }
    } else {
      if (!isDeleting && j < phrases[i].length) {
        currentPhrase.push(phrases[i][j++]);
      } else if (isDeleting && j > 0) {
        currentPhrase.pop();
        j--;
      }

      if (j === phrases[i].length && !isDeleting) {
        isPaused = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        isPaused = true;
      }
    }

    setTimeout(loop, isDeleting ? 80 : 140);
  };

  loop();

  // Mobile menu toggle
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('a');

  toggle.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden');
    toggle.textContent = isHidden ? '☰' : '✕';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggle.textContent = '☰';
    });
  });

 


   // Prevent contact form reload
   const contactForm = document.querySelector('form');
  if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add your form handling logic here (e.g., send data via AJAX)
    alert('Thank you for your message!');
  });
}


//  actual info
const phoneNumber = "233546023094"; 
const emailAddress = "amiduawindago@email.com";

document.getElementById("whatsapp-link").href = `https://wa.me/${phoneNumber}`;
document.getElementById("email-link").href = `mailto:${emailAddress}`;


const scrollBtn = document.getElementById("scrollToTopBtn");

  // Show button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

 const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          window.location.href = "thank-you.html"; // ✅ redirect on success
        } else {
          alert("Error sending message. Please try again.");
        }
      })
      .catch(() => {
        alert("Network error. Please check your connection.");
      });
    });

});






  