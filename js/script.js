const inputElement = document.getElementById('input');
const outputElement = document.querySelector('.output');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonLabel = button.textContent;
    const inputValue = inputElement.value.trim();

    switch (buttonLabel) {
      case 'ABC':
        outputElement.textContent = inputValue.toUpperCase();
        break;
      case 'abc':
        outputElement.textContent = inputValue.toLowerCase();
        break;
      case 'Abc':
        outputElement.textContent =
          inputValue.charAt(0).toUpperCase() +
          inputValue.slice(1).toLowerCase();
        break;
      case 'B':
        outputElement.textContent = `<b>${inputValue}</b>`;
        break;
      case 'I':
        outputElement.textContent = `<i>${inputValue}</i>`;
        break;
      case 'U':
        outputElement.textContent = `<u>${inputValue}</u>`;
        break;
      case 'copy':
        copyToClipboard(inputValue);
        break;
    }
  });
});

function copyToClipboard(text) {
  const tempElement = document.createElement('textarea');
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);
}
