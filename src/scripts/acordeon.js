document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  const accordionContents = document.querySelectorAll('.accordion-content');

  if (accordionButtons.length > 0) {
    accordionButtons[0].parentNode.classList.add('active');
    accordionContents[0].style.maxHeight = accordionContents[0].scrollHeight + 'px';

    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const accordionItem = button.parentNode;
        const accordionContent = accordionItem.querySelector('.accordion-content');

        if (accordionItem.classList.contains('active')) {
          accordionItem.classList.remove('active');
          accordionContent.style.maxHeight = '0';
        } else {
          accordionButtons.forEach(otherButton => {
            otherButton.parentNode.classList.remove('active');
            otherButton.parentNode.querySelector('.accordion-content').style.maxHeight = '0';
          });

          accordionItem.classList.add('active');
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
      });
    });
  }
});
