document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.querySelector('.progress-bar');
    const slider = document.querySelector('.slider');
    const nbrPageviews = document.getElementById('nbrPageviews');
    const price = document.getElementById('price');

    // Vérifier si les éléments sont correctement sélectionnés
    if (!nbrPageviews || !price) {
        console.error("Erreur : Les éléments nbrPageviews et price ne sont pas correctement sélectionnés.");
        return;
    }

    // Définir les plages de pages vues et les tarifs correspondants
    const pageViews = [10, 50, 100, 500, 1000];
    const prices = [8, 12, 16, 24, 36];

    // Fonction pour mettre à jour les offres en fonction de la position de l'icône slider
    function updateOffers() {
        const progress = (slider.offsetLeft / (progressBar.offsetWidth - slider.offsetWidth)) * 100;

        // Trouver l'indice correspondant dans le tableau des plages de pages vues
        let index = Math.floor((progress / 100) * (pageViews.length - 1));

        // Mettre à jour le nombre de pages vues et le prix affiché
        nbrPageviews.textContent = `${pageViews[index] || ''}`;
        price.textContent = `${prices[index] || ''}`;
    }

    // Positionner l'icône slider sur le tarif 100/16 au début
    slider.style.left = `calc(${100 / pageViews[2]}% - ${slider.offsetWidth / 2}px)`;
    updateOffers(); // Mettre à jour les offres initiales

    // Écouter les événements de glissement sur l'icône slider
    let isDown = false;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
    });
    slider.addEventListener('mouseup', () => isDown = false);
    progressBar.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const newX = e.pageX - progressBar.offsetLeft - slider.offsetWidth / 2;
        if (newX >= 0 && newX <= progressBar.offsetWidth - slider.offsetWidth) {
            slider.style.left = `${newX}px`;
            updateOffers();
        }
    });
});
