package com.cognizant.library.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.cognizant.library.mapper.UserMapper;
import com.cognizant.library.model.Login;
import com.cognizant.library.model.UserModel;


@Repository
public class UserDao {

	private final String SELECT = "select * from User";
	private final String LOGIN = "select user_password from user where  user_userid = ";
	private final String LOGIN_ADMIN = "select ad_password from admin where  ad_username = ";
	private final String LOGIN_LIBRARIAN = "select lib_password from librarian where  lib_userid = ";
	private final static String INSERT = "insert into User (user_firstname,user_lastname ,user_dob , user_gender ,user_contact,user_email, user_userid, user_password) values(?,?,?,?,?,?,?,?);";

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public List<UserModel> getAllUsers() {
		return jdbcTemplate.query(SELECT, new UserMapper());
	}

	public boolean insertUser(UserModel user) {
		java.sql.Date date = new java.sql.Date(user.getDob().getTime());
		if (jdbcTemplate.update(INSERT, user.getFirstname(), user.getLastname(), date, user.getGender(),
				user.getContactno(),user.getEmail(), user.getUserid(), user.getPassword()) != 0) {
			return true;
		}
		return false;
	}

	public boolean checkLogin(Login user) {
		boolean loggedIn=false;
		if(user.getRole().equals("user") ){
		try {
			System.out.println(LOGIN + "\""+user.getUserId());
			String password = this.jdbcTemplate.queryForObject(LOGIN+ "\""+user.getUserId() + "\"", String.class);
			if (password.equals(user.getPassword())) {
				loggedIn = true;
			} else {
				loggedIn = false;
			}
		} catch (Exception e) {
			loggedIn = false;
		}
		return loggedIn;
		}
		else if(user.getRole().equals("admin")) {
			try {
				System.out.println(LOGIN_ADMIN + "\""+user.getUserId());
				String password = this.jdbcTemplate.queryForObject(LOGIN_ADMIN+ "\""+user.getUserId() + "\"", String.class);
				if (password.equals(user.getPassword())) {
					loggedIn = true;
				} else {
					loggedIn = false;
				}
			} catch (Exception e) {
				loggedIn = false;
			}
			return loggedIn;
			
		}
		else if(user.getRole().equals("librarian")){
			try {
				System.out.println(LOGIN_LIBRARIAN + "\""+user.getUserId());
				String password = this.jdbcTemplate.queryForObject(LOGIN_LIBRARIAN+ "\""+user.getUserId() + "\"", String.class);
				if (password.equals(user.getPassword())) {
					loggedIn = true;
				} else {
					loggedIn = false;
				}
			} catch (Exception e) {
				loggedIn = false;
			}
			return loggedIn;
			
		}
		return loggedIn;
	}

}
