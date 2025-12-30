document.querySelectorAll('.legend a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Retire la classe si elle est déjà présente
      targetElement.classList.remove('highlight');

      // Force le reflow pour redéclencher l'animation
      void targetElement.offsetWidth;

      // Ajoute la classe pour la lueur
      targetElement.classList.add('highlight');

      // Retire la classe après 2s
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 2000);
    }
  });
});