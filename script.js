
  AOS.init();

  AOS.init({
    duration: 1500, // Duration of animation in milliseconds
    easing: 'ease', // Easing function for animation
    offset: 100, // Offset (in pixels) from the bottom of the viewport for triggering the animation
    once: true // Whether to only animate elements once when they come into view
  });


  const greeting = "Hi I'm Vikram";

  // Function to simulate typing effect
  function typeText(element, text, delay) {
      let i = 0;
      const interval = setInterval(() => {
          element.textContent += text.charAt(i);
          i++;
          if (i >= text.length) {
              clearInterval(interval);
              // Restart typing effect immediately
              setTimeout(() => {
                  element.textContent = '';
                  typeText(element, text, delay);
              }, 1000); // Delay before restarting the typing effect
          }
      }, delay);
  }

  // Start typing the greeting
  typeText(document.getElementById("greeting"), greeting, 100);
  // const greeting = "Hi I'm Vikram";

  // // Function to simulate typing effect
  // function typeText(element, text, delay) {
  //     let i = 0;
  //     const interval = setInterval(() => {
  //         element.textContent += text.charAt(i);
  //         i++;
  //         if (i > text.length) {
  //             clearInterval(interval);
  //         }
  //     }, delay);
  // }

  // // Start typing the greeting
  // typeText(document.getElementById("greeting"), greeting, 100);


const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const nav = document.querySelector('.nav');
    nav.classList.remove('openNav'); // Remove the openNav class
    event.stopPropagation(); // Prevent event bubbling
  });
});

const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


window.addEventListener('load', function() {
    // Check if the screen width is smaller than 768px (typical for mobile devices)
    if (window.innerWidth <= 768) {
        // Get the element by its ID
        var elementToRemove = document.getElementById('blankdiv');
        // Check if the element exists
        if (elementToRemove) {
            // Remove the element
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
    }
});

