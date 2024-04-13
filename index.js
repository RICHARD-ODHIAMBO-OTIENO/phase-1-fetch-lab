function fetchBooks() {
  // We return the fetch so that it can be accessed
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      // Unwrapping the response
      return response.json();
    })
    .then(function(json) {
      renderBooks(json);
    });
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
