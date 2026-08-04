const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function prepareEmail(event) {
  event.preventDefault();

  // Replace this with your business email when ready.
  const businessEmail = '';

  if (!businessEmail) {
    alert('Add your business email in script.js, or contact Veritas Solution LLC by phone/text at 216-214-4720.');
    window.location.href = 'sms:+12162144720?body=Hello%20Veritas%20Solution%20LLC,%20I%20would%20like%20an%20estimate.';
    return false;
  }

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Estimate request from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nCity: ${city}\n\nProject details:\n${message}`
  );

  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  return false;
}
