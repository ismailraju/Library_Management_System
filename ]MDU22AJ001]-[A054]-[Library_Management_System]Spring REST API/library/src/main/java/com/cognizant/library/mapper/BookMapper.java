package com.cognizant.library.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.cognizant.library.model.BookModel;

public class BookMapper implements RowMapper<BookModel>{
	public BookModel mapRow(ResultSet resultSet, int i) throws SQLException {
		BookModel book = new BookModel();
		book.setBooknumber(resultSet.getInt("b_number"));
		book.setBookname(resultSet.getString("b_name"));
		book.setAuthor(resultSet.getString("b_author"));
		book.setSubject(resultSet.getString("b_subject"));
		
		return book;
		}
}
