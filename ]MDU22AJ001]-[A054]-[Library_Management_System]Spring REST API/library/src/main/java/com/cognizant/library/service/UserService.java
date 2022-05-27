package com.cognizant.library.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.library.dao.UserDao;
import com.cognizant.library.model.Login;
import com.cognizant.library.model.UserModel;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	public List<UserModel> getAllUser() {
		return userDao.getAllUsers();
	}

	public boolean postUser(UserModel user) {
		return userDao.insertUser(user);
	}

	public boolean checkLogin(Login user) {
		if (this.userDao.checkLogin(user)) {
			return true;
		}
		return false;
	}

}
