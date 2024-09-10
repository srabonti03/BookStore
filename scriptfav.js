document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('book-list');

    const books = [
        { id: 1, title: 'Harry Potter', price: 20, image: 'book-1.jpg' },
        { id: 2, title: 'The Queen of Nothing', price: 18, image: 'book-2.jpg' },
        { id: 4, title: 'Mreenmayee', price: 30, image: 'book-3.jpg' },
        { id: 5, title: 'Sanchayeetaa', price: 92, image: 'book-4.jpg' },
        { id: 5, title: 'Maa', price: 28, image: 'book-6.jpg' },
        { id: 5, title: 'The Mind of A Leader', price: 80, image: 'book-21.jpg' },
        { id: 5, title: 'Memory', price: 62, image: 'book-23.jpg' },
        { id: 5, title: 'El Idiota', price: 56, image: 'book-32.jpg' },
        { id: 5, title: 'Feluda', price: 79, image: 'book-11.jpg' },
        { id: 5, title: 'The Three Month Rule', price: 22, image: 'book-9.jpg' },
    ];

    displayBooks();

    function displayBooks() {
        bookList.innerHTML = '';

        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>Price: $${book.price}.00</p>
                <button onclick="addToCart(${book.id})">Add to Cart</button>
            `;
            bookList.appendChild(bookElement);
        });
    }

    function addToCart(bookId) {
        const selectedBook = books.find(book => book.id === bookId);
        if (selectedBook) {
            cart.push({ ...selectedBook });
            console.log(`Book "${selectedBook.title}" added to the cart.`);
            displayCart();
        }
    }
});
