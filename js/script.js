document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide');

    if (slides && totalSlides.length > 0) {
        let currentSlide = 0;

        function changeSlide(direction) {
            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = totalSlides.length - 1;
            } else if (currentSlide >= totalSlides.length) {
                currentSlide = 0;
            }

            const offset = -currentSlide * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        function autoChangeSlide() {
            changeSlide(1);
        }

        setInterval(autoChangeSlide, 3000);
    } else {
        console.error("Slides not found in the DOM.");
    }

    // Selektujte sve content-box elemente koji sadrže slike
    const contentBoxes = document.querySelectorAll('.content-box');

    contentBoxes.forEach(box => {
        const images = box.querySelectorAll('img');
        if (images.length > 0) {
            let currentImageIndex = 0;

            function changeImage() {
                images.forEach(img => img.style.opacity = 0);
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].style.opacity = 1;
            }

            setInterval(changeImage, 3000);
        }
    });

    const countryCodeSelect = document.getElementById('countryCode');
    const phoneNumberInput = document.getElementById('phoneNumber');

    if (countryCodeSelect && phoneNumberInput) {
        countryCodeSelect.addEventListener('change', updatePhoneNumber);

        function updatePhoneNumber() {
            const selectedCountryCode = countryCodeSelect.value;
            const phoneNumber = phoneNumberInput.value.replace(/^\+?\d*/, '');
            phoneNumberInput.value = selectedCountryCode + phoneNumber;
        }
    }
});



// Funkcija za skrolovanje na vrh stranice
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Funkcija za skrolovanje na dno stranice
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Proverite da li DOM sadrži dugmad za skrolovanje
document.addEventListener('DOMContentLoaded', () => {
    const scrollUpButton = document.querySelector('.scroll-up');
    const scrollDownButton = document.querySelector('.scroll-down');

    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', scrollToTop);
    }

    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', scrollToBottom);
    }
});
