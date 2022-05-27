package com.cognizant.library.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.library.dao.BookDao;
import com.cognizant.library.model.BookModel;


@Service
public class BookService {
	
	
	@Autowired
	private BookDao bookDao;

	public List<BookModel> getAllBook() {
		return bookDao.getAllBook();
	}

	public boolean postBook(BookModel book) {
		return bookDao.insertBook(book);
	}
	public void updateBook(BookModel obj) {
		bookDao.updateBook(obj);
	}


}
