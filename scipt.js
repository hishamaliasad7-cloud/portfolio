document.querySelector('.primary-btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
