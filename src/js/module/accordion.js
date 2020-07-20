export default (buttonClass, openClass) => {
  const buttons = document.querySelectorAll(buttonClass);
  if (!buttons.length) {
    return;
  }

  const onButtonClick = (evt) => {
    const accordionEl = evt.currentTarget.parentElement.parentElement;
    const headingEl = evt.currentTarget.parentElement;
    const textEl = evt.currentTarget.parentElement.nextElementSibling;
    // debugger;
    evt.stopPropagation();
    if (accordionEl.classList.contains(openClass)) {
      // textEl.style.height = `0`;
      accordionEl.style.height = headingEl.offsetHeight + `px`;
      accordionEl.classList.remove(openClass);
    } else {
      accordionEl.style.height = (headingEl.clientHeight + textEl.clientHeight) + `px`;
      // textEl.style.height = textEl.scrollHeight + `px`;
      accordionEl.classList.add(openClass);
    }
  };

  [].forEach.call(buttons, (it) => {
    it.addEventListener('click', onButtonClick);
    it.parentElement.parentElement.style.height = it.parentElement.offsetHeight + `px`;
  })
}
