package com.api.crudExample.controller;

import com.api.crudExample.entity.Book;
import com.api.crudExample.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("root")
public class BookController 
{
    private BookService bookService;

    public BookController(BookService bookService)
    {
        this.bookService=bookService;
    }

    @GetMapping("getAll")
    public List<Book> getAll()
    {
        return bookService.getAll();
    }

    @GetMapping("/get/{id}")
    public Optional<Book> get(@PathVariable Long id)
    {
        return bookService.get(id);
    }
    
    @PostMapping("/add")
    public Book add(@RequestBody Book book)
    {
        bookService.add(book);
        return book;
    }

    @PutMapping("/update/{id}")
    public Book update(@RequestBody Book book, @PathVariable Long id)
    {
        book.setId(id);
        bookService.update(book);
        return book;
    }
    
    @DeleteMapping("/delete/{id}")
    public Optional<Book> delete(@PathVariable Long id)
    {
        return bookService.delete(id);
    }
}
    