/**
 * Language Logic
 */ 
// Find language set in the browser
document.addEventListener('DOMContentLoaded', function () {
  const userLang = navigator.language || navigator.userLanguage;
  const currentPath = window.location.pathname;

  // Check if the user is on the root or a non-language-specific page
  if (currentPath === '/' || currentPath === '/index.html') {
    if (userLang.startsWith('fr')) {
      window.location.href = '/fr/index.html';
    } else {
      window.location.href = '/en/index.html';
    }
  }
 
});

function changeLanguage() {
  const currentPath = window.location.pathname;
  if (currentPath.includes('en/')) {
    window.location.href = currentPath.replace('en/', 'fr/')
  }
  else {
    window.location.href = currentPath.replace('fr/', 'en/')
  }
}

/** Animations
 *  
 *  Animates sections to slide in or fade in
 * 
 */
const slideInLeftElements = document.getElementsByClassName('slide-in-left');
const slideInUpElements = document.getElementsByClassName('slide-in-up');
const fadeInElements = document.getElementsByClassName('fade-in');

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

animate();
function animate() {

  //For slide in animated elements
  for (let i = 0; i < slideInLeftElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInLeftElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInLeftElements[i].classList.add("slide-in-animate");
    }
  }
  for (let i = 0; i < slideInUpElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInUpElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInUpElements[i].classList.add("slide-in-animate");
    }
  }
  //For fade in animated elements
  for (let i = 0; i < fadeInElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeInElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      fadeInElements[i].classList.add("fade-in-animate");
    }
  }

}

/**
 * Functions for slider for our clients sections
 */
try {

  const slider = document.getElementById('slider');
  const prevSlider = document.getElementById('prevSlider');
  const nextSlider = document.getElementById('nextSlider');

  let autoScrollInterval;

  // Function to handle the auto-scrolling
  const autoScroll = () => {
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft + (screen.width / 2);
    else
      slider.scrollLeft = slider.scrollLeft + (screen.width / 4);

    // Reset to start if at the end
    if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
      slider.scrollLeft = 0;
    }
  };

  // Start auto-scrolling every 3 seconds
  autoScrollInterval = setInterval(autoScroll, 3000);

  // Pause auto-scroll when user interacts with the arrows
  prevSlider.addEventListener('click', () => {
    clearInterval(autoScrollInterval); // Pause auto-scroll
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft - (screen.width / 2);
    else
      slider.scrollLeft = slider.scrollLeft - (screen.width / 4);

    if (slider.scrollLeft == 0)
      slider.scrollLeft += slider.scrollWidth - slider.clientWidth;

    autoScrollInterval = setInterval(autoScroll, 3000); // Restart auto-scroll after interaction
  });

  nextSlider.addEventListener('click', () => {
    clearInterval(autoScrollInterval); // Pause auto-scroll
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft + (screen.width / 2);
    else
      slider.scrollLeft = slider.scrollLeft + (screen.width / 4);

    if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth))
      slider.scrollLeft -= slider.scrollLeft;

    autoScrollInterval = setInterval(autoScroll, 3000); // Restart auto-scroll after interaction
  });
}
catch {

}
/**
 * Functions for slider for testimonials
 */
try {

  const slider = document.getElementById('slider2');
  const prevSlider = document.getElementById('prevSlider2');
  const nextSlider = document.getElementById('nextSlider2');

  let autoScrollInterval;

  // Function to handle the auto-scrolling
  const autoScroll = () => {
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft + (screen.width);
    else
      slider.scrollLeft = slider.scrollLeft + (screen.width / 2);

    // Reset to start if at the end
    if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
      slider.scrollLeft = 0;
    }
  };

  // Start auto-scrolling every 5 seconds
  autoScrollInterval = setInterval(autoScroll, 5000);

  // Pause auto-scroll when user interacts with the arrows
  prevSlider.addEventListener('click', () => {
    clearInterval(autoScrollInterval); // Pause auto-scroll
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft - (screen.width);
    else
      slider.scrollLeft = slider.scrollLeft - (screen.width / 2);

    if (slider.scrollLeft == 0)
      slider.scrollLeft += slider.scrollWidth - slider.clientWidth;

    autoScrollInterval = setInterval(autoScroll, 3000); // Restart auto-scroll after interaction
  });

  nextSlider.addEventListener('click', () => {
    clearInterval(autoScrollInterval); // Pause auto-scroll
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft + (screen.width);
    else
      slider.scrollLeft = slider.scrollLeft + (screen.width / 2);

    if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth))
      slider.scrollLeft -= slider.scrollLeft;

    autoScrollInterval = setInterval(autoScroll, 3000); // Restart auto-scroll after interaction
  });
}
catch {

}


/**
 * Functions for animated Our Team section
 */
const teamCards = document.getElementsByClassName('card');
let cardOpen = false;
let openCardIndex = null;

// Open/close card on click
for (let i = 0; i < teamCards.length; i++) {
  teamCards[i].addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from propagating to window click event
    
    // Close the currently open modal if a different card is clicked
    if (cardOpen && openCardIndex !== i) {
      const currentOpen = teamCards[openCardIndex].getElementsByClassName('info-card')[0];
      currentOpen.classList.remove('show');
      currentOpen.classList.add('hidden');
      cardOpen = false;
      openCardIndex = null;
    }

    // Toggle the clicked card's modal
    if (!cardOpen) {
      const current = teamCards[i].getElementsByClassName('info-card')[0];
      current.classList.add('show');
      current.classList.remove('hidden');
      cardOpen = true;
      openCardIndex = i;
    } 
    else if (cardOpen && openCardIndex === i) {
      // If clicking the same open card, close it
      const current = teamCards[i].getElementsByClassName('info-card')[0];
      current.classList.remove('show');
      current.classList.add('hidden');
      cardOpen = false;
      openCardIndex = null;
    }
  });
}

// Close modal on any click outside the card or on scrolling
const closeModal = () => {
  if (cardOpen) {
    const current = teamCards[openCardIndex].getElementsByClassName('info-card')[0];
    current.classList.remove('show');
    current.classList.add('hidden');
    cardOpen = false;
    openCardIndex = null;
  }
};

// Close modal on click outside
window.addEventListener('click', closeModal);

// Close modal on scroll
window.addEventListener('scroll', closeModal);


/**
 * Product slides
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
  const productCont = document.getElementById('products')
  const menuContainer = document.getElementById('slide-menu');
  const menuItems = menuContainer.getElementsByClassName('menu-item');
  const slides = document.getElementsByClassName('slide');

  for (let item of menuItems) {
      item.addEventListener('click', function() {
          // Remove 'active' class from all menu items
          for (let otherItem of menuItems) {
              otherItem.classList.remove('active');
          }

          // Add 'active' class to the clicked item
          this.classList.add('active');

          // Hide all slides
          for (let slide of slides) {
              slide.classList.remove('active');
          }

          // Show the corresponding slide with a fade-in effect
          const slideId = this.getAttribute('data-slide');
          document.getElementById(slideId).classList.add('active');

          // Show a white bg for the second slide
          if (slideId == 'slide-1' || slideId == 'slide-2') 
            productCont.classList.add('white-bg')
          else 
            productCont.classList.remove('white-bg')
      });
  }
})

/**
 * Determine which product to show
 */
function chooseProduct() {

  const productCont = document.getElementById('products')
  const slides = document.getElementsByClassName('slide')
  const menuContainer = document.getElementById('slide-menu')
  const menuItems = menuContainer.getElementsByClassName('menu-item')

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const product = urlParams.get('product')

  let activeSlide = 0;
  if (product == 'websynco') activeSlide = 0
  else if (product == 'analytix') activeSlide = 1
  else if (product == 'mv') activeSlide = 2

  if (activeSlide == 1) 
    productCont.classList.add('white-bg')
  else 
    productCont.classList.remove('white-bg')

  for (let i=0; i<slides.length; i++) {
    if (i != activeSlide) {
      slides[i].classList.remove('active')
      menuItems[i].classList.remove('active')
    }   
    else {
      slides[i].classList.add('active')
      menuItems[i].classList.add('active')
    }
  }


}

/**
 * 
 * Functionality for the accordion section
 * 
 */
const accordions = document.getElementsByClassName('accordion');
let openAccordion;

for (let i=0; i < accordions.length; i++) {

  accordions[i].addEventListener('click', function() {
    if (openAccordion == null) {
      openAccordion = this;
    }
    else if (this != openAccordion) {
      openAccordion.classList.toggle("open-accordion");
      openAccordion = this;
    }   
    else {
      openAccordion = null;
    }
    this.classList.toggle("open-accordion");   
  })

}

/**
 * BLOG Settings
 */
// window.addEventListener('message', (event) => {
//   // Optionally filter by origin
//   // if (event.origin !== 'https://blog.enerzam.com') return;

//   const iframe = document.getElementById('blogIframe');
//   const newHeight = parseInt(event.data);

//   if (!isNaN(newHeight)) {
//     iframe.style.height = newHeight + 'px';
//   }
// });