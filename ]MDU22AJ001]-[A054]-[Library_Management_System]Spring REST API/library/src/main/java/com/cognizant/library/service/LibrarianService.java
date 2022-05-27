package com.cognizant.library.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.library.dao.LibrarianDao;

import com.cognizant.library.model.LibrarianModel;

@Service
public class LibrarianService {

	
	@Autowired
	private LibrarianDao librarianDao;

	public List<LibrarianModel> getAllLibrarian() {
		return librarianDao.getAllLibrarian();
	}

	public boolean postLibrarian(LibrarianModel librarian) {
		return librarianDao.insertUser(librarian);
	}

	public boolean checkLogin(LibrarianModel librarian) {
		if (this.librarianDao.checkLogin(librarian)) {
			return true;
		}
		return false;
	}
}
