document.addEventListener("DOMContentLoaded", function() {
    let hamburger = document.querySelector(".hamburger")
    let navBar = document.querySelector(".nav-bar")
    let navLinks = document.querySelectorAll(".nav-bar ul li a.option")

    // Function to set the active class based on the current URL
    function setActiveLink() {
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath.split('/').pop()) {
                link.classList.add("active")
            } else {
                link.classList.remove("active")
            }
        })
    }

    // Toggle navigation bar on hamburger click
    hamburger.onclick = function() {
        navBar.classList.toggle("active")
    }

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            // Add active class to the clicked link
            this.classList.add("active");
            // Close the navigation menu if open (for mobile view)
            navBar.classList.remove("active");
        })
    })

    // Set the active link on page load
    setActiveLink()
})
document.addEventListener("DOMContentLoaded", function() {
    function initializeSlider(sliderClass, navButtonClass, nextButtonClass, prevButtonClass) {
        let currentSlide = 0;
        const slides = document.querySelectorAll(sliderClass);
        const navButtons = document.querySelectorAll(navButtonClass);
        const nextButton = document.querySelector(nextButtonClass);
        const prevButton = document.querySelector(prevButtonClass);

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                navButtons[i].classList.remove('active');
            });
            slides[index].classList.add('active');
            navButtons[index].classList.add('active');
        }

        navButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                currentSlide = index;
                showSlide(index);
            });
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        showSlide(currentSlide);
    }

    // Initialize both sliders
    initializeSlider('.slide', '.nav-button', '.next-button', '.prev-button');
    initializeSlider('.slide-two', '.nav-button-two', '.next-button-two', '.prev-button-two');
});
