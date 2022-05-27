package com.cognizant.library.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.cognizant.library.mapper.LibrarianMapper;
import com.cognizant.library.model.LibrarianModel;
@Repository
public class LibrarianDao {
	private final static String SELECT = "select * from librarian;";
	private final String LOGIN = "select password from librarian where  lib_username = ? ";
	private final static String INSERT = "insert into librarian (lib_firstname,lib_lastname ,lib_dob , lib_gender ,lib_contactno,lib_email, lib_username, lib_password) values(?,?,?,?,?,?,?,?);";

	@Autowired
	private  JdbcTemplate jdbcTemplate;

	public List<LibrarianModel> getAllLibrarian() {
		return jdbcTemplate.query(SELECT, new LibrarianMapper());
	}

	public  boolean insertUser(LibrarianModel librarian) {
		java.sql.Date date = new java.sql.Date(librarian.getDob().getTime());
		if (jdbcTemplate.update(INSERT, librarian.getFirstname(), librarian.getLastname(), date, librarian.getGender(),
				librarian.getContactno(),librarian.getEmail(), librarian.getUsername(), librarian.getPassword()) != 0) {
			return true;
		}
		return false;
	}

	public boolean checkLogin(LibrarianModel librarian) {
		boolean loggedIn;
		try {
			String password = this.jdbcTemplate.queryForObject(LOGIN, String.class, new Object[] { librarian.getUsername() });
			if (password.equals(librarian.getPassword())) {
				loggedIn = true;
			} else {
				loggedIn = false;
			}
		} catch (Exception e) {
			loggedIn = false;
		}
		return loggedIn;
	}

}
