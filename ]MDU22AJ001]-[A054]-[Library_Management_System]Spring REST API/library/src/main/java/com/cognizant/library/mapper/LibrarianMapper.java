package com.cognizant.library.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import com.cognizant.library.model.LibrarianModel;

public class LibrarianMapper implements RowMapper<LibrarianModel>{
	public LibrarianModel mapRow(ResultSet resultSet, int i) throws SQLException {
		LibrarianModel librarian = new LibrarianModel();
		librarian.setFirstname(resultSet.getString("lib_firstname"));
		librarian.setLastname(resultSet.getString("lib_lastname"));
		librarian.setDob(new Date(resultSet.getDate("lib_dob").getTime()));
		librarian.setGender(resultSet.getString("lib_gender"));
		
		librarian.setContactno(resultSet.getInt("lib_contact"));
		librarian.setEmail(resultSet.getString("lib_email"));
		librarian.setUsername(resultSet.getString("lib_userid"));
		librarian.setPassword(resultSet.getString("lib_password"));
		return librarian;
		}
}
