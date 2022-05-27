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

import com.cognizant.library.model.Login;
import com.cognizant.library.model.UserModel;
import com.cognizant.library.service.UserService;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody Login obj) {
		if (this.userService.checkLogin(obj)) {
			return new ResponseEntity<Object>(true,HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>(false,HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/User")
	public ResponseEntity<List<UserModel>> getAllCourses() {
		return ResponseEntity.ok(userService.getAllUser());
	}

	@PostMapping("/User")
	public ResponseEntity<Object> postStudent(@RequestBody UserModel model) {
		try {
			boolean status = userService.postUser(model);
			if (!status) {
				throw new Exception();
			}
			return new ResponseEntity<Object>(model, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
}
