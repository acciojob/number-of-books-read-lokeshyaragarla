            count++;
        }
    }
    return count;
}
// Display the books and stats
function displayBooksAndStats() {
    const output = document.getElementById('output');
    const bookList = document.createElement('div');
    
    output.innerHTML = '<h2>Your Library:</h2>';
    
    // Display each book
    library.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.textContent = `${book.title} by ${book.author} - ${book.readingStatus ? 'Read' : 'Unread'}`;
        bookList.appendChild(bookDiv);
    });
    
    output.appendChild(bookList);
    
    // Display stats
    const booksRead = numberOfBooksRead(library);
    document.getElementById('total-books').textContent = library.length;
    document.getElementById('books-read').textContent = booksRead;
    document.getElementById('books-unread').textContent = library.length - booksRead;
}
// Initialize when page loads
window.onload = displayBooksAndStats;
