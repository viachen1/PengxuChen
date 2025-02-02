// List of photo file names
const photos = ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg"]; // Add more photos if needed
let currentPhotoIndex = 0;

// Function to change the photo
function changePhoto() {
    const photoElement = document.getElementById("profile-photo");
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; // Cycle through the photos
    photoElement.src = photos[currentPhotoIndex]; // Update the photo source
}

changePhoto();
// Change photo every 3 seconds (3000 milliseconds)
setInterval(changePhoto, 3000);