export default (buttonClass, openClass) => {
  const buttons = document.querySelectorAll(buttonClass);
  if (!buttons.length) {
    return;
  }

  const onButtonClick = (evt) => {
    const accordionEl = evt.currentTarget.parentElement.parentElement;
    const headingEl = evt.currentTarget.parentElement;
    const textEl = evt.currentTarget.parentElement.nextElementSibling;
    evt.stopPropagation();
    if (accordionEl.classList.contains(openClass)) {
      accordionEl.style.height = headingEl.offsetHeight + `px`;
      accordionEl.classList.remove(openClass);
    } else {
      accordionEl.style.height = (headingEl.offsetHeight + textEl.offsetHeight) + `px`;
      accordionEl.classList.add(openClass);
    }
  };

  [].forEach.call(buttons, (it) => {
    it.addEventListener('click', onButtonClick);
    it.parentElement.parentElement.style.height = it.parentElement.offsetHeight + `px`;
  })
}
