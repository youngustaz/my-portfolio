// Show the button when user scrolls down 100px
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to the top when button is clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add the event listener once DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTopBtn");
  btn.addEventListener("click", topFunction);
});
 // ===== Form submission handling =====
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
            document.getElementById("form-container").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
          } else {
            alert("There was a problem submitting your form.");
          }
        })
        .catch(() => {
          alert("There was a problem connecting to the server.");
        });
    });
  }
});

