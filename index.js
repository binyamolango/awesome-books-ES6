class BookManager {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('books')) || [];
      this.addBtn = document.getElementById('formBtn');
      this.awesomeBooks = document.getElementById('book');
  
      this.addBtn.addEventListener('click', this.add.bind(this));
      this.awesomeBooks.addEventListener('click', this.remove.bind(this));
      window.addEventListener('DOMContentLoaded', this.update.bind(this));
    }
  
    add = () => {
      const title = document.getElementById('fTitle').value;
      const author = document.getElementById('fAuthor').value;
  
      if (title.trim() === '' || author.trim() === '') {
        return;
      }
  
      this.books.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.books));
  
      this.update();
      document.getElementById('fTitle').value = '';
      document.getElementById('fAuthor').value = '';
    }
  
    remove = (event) => {
      if (event.target.classList.contains('remove-button')) {
        const bookTitle = event.target.value;
        this.books = this.books.filter((book) => book.title !== bookTitle);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.update();
      }
    }
  
    update = () => {
      this.awesomeBooks.innerHTML = '';
  
      this.books.forEach((book) => {
        this.awesomeBooks.innerHTML += `
          <div class="books">
            <p class="bookDetail">"${book.title}" by ${book.author}</p>
            <button type="button" class="remove-button" value="${book.title}">Remove</button>
          </div>
        `;
      });
    }
  }
  
  const bookManager = new BookManager();
  
  bookManager.update();

  // eslint-disable-next-line
import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';

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

const displayTime = document.getElementById('date-display');

setInterval(() => {
  const now = DateTime.now();
  displayTime.innerHTML = now.toFormat('LLLL dd yyyy, hh:mm:ss a');
}, 500);
