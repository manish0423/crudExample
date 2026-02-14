// API Base URL
const API_URL = 'http://localhost:8080/root';

// DOM Elements
const bookForm = document.getElementById('book-form');
const bookIdInput = document.getElementById('book-id');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const formTitle = document.getElementById('form-title');
const booksTbody = document.getElementById('books-tbody');
const noBooksMsg = document.getElementById('no-books');

// Load all books when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});

// Form submit handler
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const bookId = bookIdInput.value;
    const book = {
        title: titleInput.value,
        author: authorInput.value
    };
    
    if (bookId) {
        updateBook(bookId, book);
    } else {
        addBook(book);
    }
});

// Cancel button handler
cancelBtn.addEventListener('click', () => {
    resetForm();
});

// Load all books
async function loadBooks() {
    try {
        const response = await fetch(`${API_URL}/getAll`);
        const books = await response.json();
        
        displayBooks(books);
    } catch (error) {
        console.error('Error loading books:', error);
        alert('Failed to load books. Make sure the server is running!');
    }
}

// Display books in table
function displayBooks(books) {
    booksTbody.innerHTML = '';
    
    if (books.length === 0) {
        noBooksMsg.style.display = 'block';
        document.getElementById('books-table').style.display = 'none';
        return;
    }
    
    noBooksMsg.style.display = 'none';
    document.getElementById('books-table').style.display = 'table';
    
    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editBook(${book.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteBook(${book.id})">Delete</button>
            </td>
        `;
        booksTbody.appendChild(row);
    });
}

// Add new book
async function addBook(book) {
    try {
        const response = await fetch(`${API_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        
        if (response.ok) {
            alert('Book added successfully!');
            resetForm();
            loadBooks();
        }
    } catch (error) {
        console.error('Error adding book:', error);
        alert('Failed to add book!');
    }
}

// Edit book - load data into form
async function editBook(id) {
    try {
        const response = await fetch(`${API_URL}/get/${id}`);
        const book = await response.json();
        
        bookIdInput.value = book.id;
        titleInput.value = book.title;
        authorInput.value = book.author;
        
        formTitle.textContent = 'Update Book';
        submitBtn.textContent = 'Update Book';
        cancelBtn.style.display = 'inline-block';
        
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error loading book:', error);
        alert('Failed to load book details!');
    }
}

// Update book
async function updateBook(id, book) {
    try {
        const response = await fetch(`${API_URL}/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        
        if (response.ok) {
            alert('Book updated successfully!');
            resetForm();
            loadBooks();
        }
    } catch (error) {
        console.error('Error updating book:', error);
        alert('Failed to update book!');
    }
}

// Delete book
async function deleteBook(id) {
    if (!confirm('Are you sure you want to delete this book?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/delete/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            alert('Book deleted successfully!');
            loadBooks();
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        alert('Failed to delete book!');
    }
}

// Reset form
function resetForm() {
    bookForm.reset();
    bookIdInput.value = '';
    formTitle.textContent = 'Add New Book';
    submitBtn.textContent = 'Add Book';
    cancelBtn.style.display = 'none';
}
