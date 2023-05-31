// Get the carousel container
const carousel = document.querySelector(".carousel");

// Get the images
const images = carousel.querySelectorAll("img");

let currentIndex = 0; // Track the current image index

// Function to show the current image and update classes
function showImage(index) {
  // Hide all images
  images.forEach((image) => {
    image.classList.remove("active");
  });

  // Show the image at the specified index
  images[index].classList.add("active");
}

// Function to show the next image
function showNext() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// Function to start the automatic slide transition
function startCarousel() {
  setInterval(showNext, 2000); // Change slide every 3 seconds (adjust as needed)
}

// Show the initial image
showImage(currentIndex);

// Start the automatic slide transition
startCarousel();

// education section

const triggers = document.querySelectorAll(".collapsible-trigger");

// Function to toggle the visibility of the collapsible content
function toggleContent() {
  const content = this.nextElementSibling;
  content.style.display = content.style.display === "none" ? "block" : "none";
}

// Attach click event listeners to the trigger elements
triggers.forEach((trigger) => {
  trigger.addEventListener("click", toggleContent);
});

// Handling scrolling and transition

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
