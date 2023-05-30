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
  setInterval(showNext, 3000); // Change slide every 3 seconds (adjust as needed)
}

// Show the initial image
showImage(currentIndex);

// Start the automatic slide transition
startCarousel();
