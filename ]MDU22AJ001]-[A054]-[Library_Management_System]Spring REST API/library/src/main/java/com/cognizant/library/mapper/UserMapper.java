package com.cognizant.library.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import com.cognizant.library.model.UserModel;

public class UserMapper implements RowMapper<UserModel>{
	
	public UserModel mapRow(ResultSet resultSet, int i) throws SQLException {
	UserModel user = new UserModel();
	user.setFirstname(resultSet.getString("firstName"));
	user.setLastname(resultSet.getString("lastName"));
	user.setDob(new Date(resultSet.getDate("dOB").getTime()));
	user.setGender(resultSet.getString("gender"));
	
	user.setContactno(resultSet.getInt("contactNumber"));
	user.setEmail(resultSet.getString("email"));
	user.setUserid(resultSet.getString("userId"));
	user.setPassword(resultSet.getString("password"));
	return user;
	}
}
