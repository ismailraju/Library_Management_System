package com.cognizant.library.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.cognizant.library.model.BookModel;
import com.cognizant.library.service.BookService;
 
@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
public class BookController {
 
    @Autowired
    private BookService bookService;
 
    @GetMapping("/book")
    public ResponseEntity<List<BookModel>> getAllCourses() {
        return ResponseEntity.ok(bookService.getAllBook());
    }
 
    @PostMapping("/book")
    public ResponseEntity<Object> postStudent(@RequestBody BookModel model) {
        try {
            boolean status = bookService.postBook(model);
            if (!status) {
                throw new Exception();
            }
            return new ResponseEntity<Object>(model, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @PostMapping("/updateBook")
    public void updateBook(@RequestBody BookModel obj) {
    	bookService.updateBook(obj);
    }
    
}