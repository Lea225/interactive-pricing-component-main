document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.querySelector('.progress-bar');
  const slider = document.querySelector('input[type="range"]');
  const nbrPageviews = document.getElementById('nbrPageviews');
  const price = document.getElementById('price');
  const sliderThumb = document.querySelector('input[type="range"]::-webkit-slider-thumb');
  const toggleIcon = document.getElementById('toggleIcon');
  const dateText = document.querySelector('.date');

  // Définir les plages de pages vues et les tarifs correspondants
  const pageViews = ['10K', '50K', '100K', '500K', '1M']; // Plages de pageviews ajustées
  const monthlyPrices = [8, 12, 16, 24, 32]; // Prix mensuels ajustés
  const yearlyPrices = monthlyPrices.map(price => price * 0.75); // Prix annuels calculés avec une réduction de 25%

  // Fonction pour mettre à jour les offres en fonction de la position du slider
  function updateOffers() {
    const progress = slider.value;
    const index = Math.floor(progress / 25);
    const isYearly = toggleIcon.classList.contains('active');

    nbrPageviews.textContent = `${pageViews[index]}`;

    if (isYearly) {
      price.textContent = `$${yearlyPrices[index]}.00`;
      dateText.textContent = '/year';
    } else {
      price.textContent = `$${monthlyPrices[index]}.00`;
      dateText.textContent = '/month';
    }
  }

  // Écouter les événements de changement sur le slider
  slider.addEventListener('input', () => {
    updateOffers(); // Mettre à jour les offres lorsque la valeur du slider change
  });

  // Mettre à jour les offres initiales lors du chargement de la page
  updateOffers();

  // Écouter les événements de clic sur l'icône de toogle
  toggleIcon.addEventListener('click', function() {
    toggleIcon.classList.toggle('active');
    updateOffers(); // Mettre à jour les offres lorsque le mode annuel/mensuel est changé
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.progress-bar');
  const customCursor = document.querySelector('.custom-cursor');

  // Fonction pour mettre à jour la position de l'icône slider
  function updateSliderIconPosition(event) {
    const rect = slider.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;
    customCursor.style.left = `calc(${percentage}% - 12px)`; // 12px est la moitié de la largeur de l'icône
  }

  // Écouter les événements de clic sur l'input
  slider.addEventListener('click', function(event) {
    updateSliderIconPosition(event);
  });

  // Mettre à jour la position initiale de l'icône slider
  updateSliderIconPosition({ clientX: slider.getBoundingClientRect().left });
});
document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.querySelector('.progress-bar');

  // Fonction pour mettre à jour la couleur de la barre de progression en fonction de la valeur du slider
  function updateProgressBarColor() {
      const value = progressBar.value;
      const percentage = value / progressBar.max * 100;
      const fillStyle = `linear-gradient(to right, hsl(174, 77%, 80%) ${percentage}%, hsl(224, 65%, 95%) ${percentage}%)`;
      progressBar.style.background = fillStyle;
  }

  // Écouter les événements de changement sur le slider
  progressBar.addEventListener('input', updateProgressBarColor);

  // Mettre à jour la couleur de la barre de progression initiale
  updateProgressBarColor();
});
