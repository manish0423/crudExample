package com.api.crudExample.service;

import com.api.crudExample.entity.Book;
import com.api.crudExample.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService 
{
    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository)
    {
        this.bookRepository=bookRepository;
    }
    public List<Book> getAll()
    {
        return bookRepository.findAll();
    }

    public Optional<Book> get(Long id) {
        return bookRepository.findById(id);
    }

    public void add(Book book) {
        bookRepository.save(book);
    }

    public void update(Book book) {

        bookRepository.save(book);
    }

    public Optional<Book> delete(Long id) {
        Optional<Book> book= bookRepository.findById(id);
        bookRepository.deleteById(id);
        return book;
    }
}
