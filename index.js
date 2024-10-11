const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.createElement('div');
const closeButton = document.createElement('button');
const modalImage = document.createElement('img');

// Setup modal structure
modal.classList.add('modal');
closeButton.classList.add('close-btn');
closeButton.textContent = '×';
modal.appendChild(modalImage);
modal.appendChild(closeButton);
document.body.appendChild(modal);

// Function to open the modal with clicked image
galleryImages.forEach(image => {
  image.addEventListener('click', function() {
    modalImage.src = this.src; // Set the clicked image as modal image
    modal.classList.add('active'); // Show modal
  });
});

// Close the modal when clicking on the close button
closeButton.addEventListener('click', function() {
  modal.classList.remove('active');
});

// Also close the modal when clicking anywhere outside the image
modal.addEventListener('click', function(e) {
  if (e.target !== modalImage && e.target !== closeButton) {
    modal.classList.remove('active');
  }
});