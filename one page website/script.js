const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const caption = document.getElementById("caption");

let currentImageIndex = 0;


// OPEN LIGHTBOX

function openLightbox(image) {

    currentImageIndex =
        Array.from(galleryImages).indexOf(image);

    lightbox.style.display = "flex";

    showImage(currentImageIndex);
}


// SHOW SELECTED IMAGE

function showImage(index) {

    const selectedImage = galleryImages[index];

    lightboxImage.src = selectedImage.src;

    lightboxImage.alt = selectedImage.alt;

    caption.textContent = selectedImage.alt;
}


// CLOSE LIGHTBOX

function closeLightbox() {

    lightbox.style.display = "none";

}


// NEXT / PREVIOUS IMAGE

function changeImage(direction) {

    currentImageIndex += direction;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    showImage(currentImageIndex);
}


// CLOSE WHEN USER CLICKS OUTSIDE IMAGE

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// KEYBOARD CONTROLS

document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            changeImage(1);
        }

        if (event.key === "ArrowLeft") {
            changeImage(-1);
        }
    }

});


// CONTACT FORM

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        this.reset();

    });