const list = document.getElementById('list');
const addNew = document.getElementById('form');
const contact = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const formLink = document.getElementById('form-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', () => {
  if (!addNew.classList.contains('hidden')) {
    addNew.classList.add('hidden');
  }

  if (!contact.classList.contains('hidden')) {
    contact.classList.add('hidden');
  }

  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
  }
  listLink.style.color = 'blue';
  formLink.style.color = 'black';
  contactLink.style.color = 'black';
});

formLink.addEventListener('click', () => {
  if (!list.classList.contains('hidden')) {
    list.classList.add('hidden');
  }

  if (!contact.classList.contains('hidden')) {
    contact.classList.add('hidden');
  }

  if (addNew.classList.contains('hidden')) {
    addNew.classList.remove('hidden');
  }
  listLink.style.color = 'black';
  formLink.style.color = 'blue';
  contactLink.style.color = 'black';
});

contactLink.addEventListener('click', () => {
  if (!list.classList.contains('hidden')) {
    list.classList.add('hidden');
  }

  if (!addNew.classList.contains('hidden')) {
    addNew.classList.add('hidden');
  }

  if (contact.classList.contains('hidden')) {
    contact.classList.remove('hidden');
  }
  listLink.style.color = 'black';
  formLink.style.color = 'black';
  contactLink.style.color = 'blue';
});