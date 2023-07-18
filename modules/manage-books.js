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

const bookManager1 = new BookManager();
export default bookManager1;