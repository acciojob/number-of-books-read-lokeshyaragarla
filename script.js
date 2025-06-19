const library = [
  { title: "Book One", author: "Author A", readingStatus: true },
  { title: "Book Two", author: "Author B", readingStatus: false },
  { title: "Book Three", author: "Author C", readingStatus: true }
];

function numberOfBooksRead(library) {
  let count = 0;
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === true) {
      count++;
    }
  }
  return count;
}

function displayBooksAndStats() {
  const output = document.getElementById('output');
  const bookList = document.createElement('div');
  
  output.innerHTML = '<h2>Your Library:</h2>';
  
  library.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.textContent = `${book.title} by ${book.author} - ${book.readingStatus ? 'Read' : 'Unread'}`;
    bookList.appendChild(bookDiv);
  });
  
  output.appendChild(bookList);

  const booksRead = numberOfBooksRead(library);
  document.getElementById('total-books').textContent = library.length;
  document.getElementById('books-read').textContent = booksRead;
  document.getElementById('books-unread').textContent = library.length - booksRead;
}

window.onload = displayBooksAndStats;
