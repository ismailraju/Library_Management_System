package com.cognizant.library.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.cognizant.library.mapper.BookMapper;
import com.cognizant.library.mapper.LibrarianMapper;
import com.cognizant.library.model.BookModel;
@Repository
public class BookDao {
	private final String SELECT = "select * from book";
	private final String LOGIN = "select * from book where b_number=?";
	private final static String INSERT = "insert into book (b_number,b_name ,b_author , b_subject) values(?,?,?,?);";

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public List<BookModel> getAllBook() {
		return jdbcTemplate.query(SELECT, new BookMapper());
	}

	public boolean insertBook(BookModel book) {
		if (jdbcTemplate.update(INSERT, book.getBooknumber(), book.getBookname(),book.getAuthor(),book.getSubject())!=0) {
			return true;
		}
		return false;
	}
	
	public void updateBook(BookModel book) {
		String sql = "Update book set b_number="+ book.getBooknumber() +","+
					"b_name= \"" + book.getBookname() +"\" ,"+
					"b_author= \"" + book.getAuthor() +"\" ,"+
					"b_subject= \"" + book.getSubject() +"\" "+
					"WHERE b_number="+ book.getBooknumber();
		System.out.println(sql);
		jdbcTemplate.update(sql);
				}
	
}
