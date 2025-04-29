const accordionButtons = document.querySelectorAll('.accordion-button');
const accordionContents = document.querySelectorAll('.accordion-content');

// Activar el primer elemento al cargar la página
accordionButtons[0].parentNode.classList.add('active');
accordionContents[0].style.maxHeight = accordionContents[0].scrollHeight + 'px';

accordionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentNode;
    const accordionContent = accordionItem.querySelector('.accordion-content');

    if (accordionItem.classList.contains('active')) {
      accordionItem.classList.remove('active');
      accordionContent.style.maxHeight = '0'; // Cierra con desplazamiento hacia arriba
    } else {
      accordionButtons.forEach(otherButton => {
        otherButton.parentNode.classList.remove('active');
        otherButton.parentNode.querySelector('.accordion-content').style.maxHeight = '0';
      });

      accordionItem.classList.add('active');

      // Calcula la altura del contenido y aplica el desplazamiento
      const contentHeight = accordionContent.scrollHeight;
      accordionContent.style.maxHeight = contentHeight + 'px';
    }
  });
});
