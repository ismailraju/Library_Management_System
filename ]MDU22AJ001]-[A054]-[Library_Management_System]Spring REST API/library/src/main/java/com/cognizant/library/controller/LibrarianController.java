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

import com.cognizant.library.model.LibrarianModel;
import com.cognizant.library.model.Login;
import com.cognizant.library.service.LibrarianService;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
public class LibrarianController {

	@Autowired
	private LibrarianService librarianService;

	@PutMapping("/librarianlogin")
	public ResponseEntity<Object> login(@RequestBody LibrarianModel model) {
		if (this.librarianService.checkLogin(model)) {
			return new ResponseEntity<Object>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/librarian")
	public ResponseEntity<List<LibrarianModel>> getAllCourses() {
		return ResponseEntity.ok(librarianService.getAllLibrarian());
	}

//	@PostMapping("/Librarian")
//	public ResponseEntity<Object> Login(@RequestBody Login obj) {
//		if (this.librarianService.checkLogin(obj)) {
//			return new ResponseEntity<Object>(true,HttpStatus.OK);
//		} else {
//			return new ResponseEntity<Object>(false,HttpStatus.BAD_REQUEST);
//		}
//	}
}
