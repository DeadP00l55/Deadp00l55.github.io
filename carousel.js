// Function to initialize carousels
function initializeCarousels() {
  const carouselContainers = document.querySelectorAll('.carousel-container');

  carouselContainers.forEach((container, index) => {
    const carouselCards = container.querySelectorAll('.carousel-card');
    const prevButton = document.getElementById(`prevButton${index + 1}`);
    const nextButton = document.getElementById(`nextButton${index + 1}`);
    let currentCardIndex = 0;

    function showCard(index) {
      carouselCards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }

    function showNextCard() {
      currentCardIndex = (currentCardIndex + 1) % carouselCards.length;
      showCard(currentCardIndex);
    }

    function showPreviousCard() {
      currentCardIndex = (currentCardIndex - 1 + carouselCards.length) % carouselCards.length;
      showCard(currentCardIndex);
    }

    nextButton.addEventListener('click', showNextCard);
    prevButton.addEventListener('click', showPreviousCard);

    showCard(currentCardIndex);
  });
}

// Call the function to initialize carousels on page load
window.addEventListener('load', initializeCarousels);

  