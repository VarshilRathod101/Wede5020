
// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {


    // --- ORDER FORM VALIDATION ---

    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', function (e) {
        let valid = true;

        // Name validation
        const name = document.getElementById('order-name');
        const nameError = document.getElementById('name_error');
        if (name.value.trim() === '') {
            nameError.textContent = "Name is required";
            nameError.style.color = 'red';
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        const email = document.getElementById('order-email');
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address in Order Form");
            valid = false;
        }

        // Password validation (min 6 characters)
        const password = document.getElementById('order-password');
        if (password.value.trim().length < 6) {
            alert("Password must be at least 6 characters in Order Form");
            valid = false;
        }

        // Phone number validation (digits only, 10-15 digits)
        const phone = document.getElementById('order-phone');
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone.value.trim())) {
            alert("Please enter a valid phone number (10-15 digits) in Order Form");
            valid = false;
        }

        // Description validation
        const description = document.getElementById('order-description');
        if (description.value.trim() === '') {
            alert("Please enter a description for your order");
            valid = false;
        }

        if (!valid) e.preventDefault(); // Prevent form submission if invalid
    });

    // --- REVIEW FORM VALIDATION ---
    const reviewForm = document.getElementById('review-form');

    reviewForm.addEventListener('submit', function (e) {
        let valid = true;

        // Username validation
        const username = document.getElementById('review-username');
        if (username.value.trim() === '') {
            alert("Username is required in Review Form");
            valid = false;
        }

        // Email validation
        const reviewEmail = document.getElementById('review-email');
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(reviewEmail.value.trim())) {
            alert("Please enter a valid email address in Review Form");
            valid = false;
        }

        // Password validation (min 8 characters)
        const reviewPassword = document.getElementById('review-password');
        if (reviewPassword.value.trim().length < 8) {
            alert("Password must be at least 8 characters in Review Form");
            valid = false;
        }

        // Review text validation (max 500 chars)
        const reviewText = document.getElementById('review-text');
        if (reviewText.value.trim() === '') {
            alert("Please write a review");
            valid = false;
        } else if (reviewText.value.trim().length > 500) {
            alert("Review cannot exceed 500 characters");
            valid = false;
        }

        if (!valid) e.preventDefault(); // Prevent form submission if invalid
    });
});




const images = document.querySelectorAll('figure img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;

        // Glow color from data attribute
        if(img.dataset.glow){
            lightboxImg.style.boxShadow = `0 0 30px 10px ${img.dataset.glow}`;
        } else {
            lightboxImg.style.boxShadow = '0 0 30px 10px #FFD700'; // default
        }
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');

    // Create "No results found" message
    const noResults = document.createElement('p');
    noResults.innerText = 'No results found.';
    noResults.style.display = 'none';
    noResults.style.fontSize = '1.2rem';
    noResults.style.fontWeight = 'bold';
    noResults.style.textAlign = 'center';
    noResults.style.margin = '20px 0';

    const allProductSections = [
        document.querySelector('.wed-cake'),
        document.querySelector('.cust-cake'),
        document.querySelector('.cup-cake'),
        document.querySelector('.pastries')
    ];

    // Insert the message at the end of main (will show if no products match)
    const main = document.querySelector('main');
    main.appendChild(noResults);

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        let anyMatchOverall = false;

        allProductSections.forEach(section => {
            const figures = section.querySelectorAll('figure');
            let anyVisible = false;

            figures.forEach(product => {
                const caption = product.querySelector('figcaption').innerText.toLowerCase();
                if (caption.includes(filter)) {
                    product.style.display = '';
                    anyVisible = true;
                } else {
                    product.style.display = 'none';
                }
            });

            const heading = section.previousElementSibling;
            if (anyVisible) {
                section.style.display = '';
                if (heading && heading.tagName.startsWith('H')) heading.style.display = '';
                anyMatchOverall = true;
            } else {
                section.style.display = 'none';
                if (heading && heading.tagName.startsWith('H')) heading.style.display = 'none';
            }
        });

        // Show the message **inside main** if nothing matches
        noResults.style.display = anyMatchOverall ? 'none' : 'block';
    });
});

// Accordion functionality
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});


