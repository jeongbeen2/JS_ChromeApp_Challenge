const selectCountry = document.querySelector('.country');

selectCountry.addEventListener('change', (countries) => {
  const choose = document.querySelector('.choose');
  choose.textContent = `Local Storage in ${countries.target.value}`;
  localStorage.setItem('country',countries.target.value);

});
