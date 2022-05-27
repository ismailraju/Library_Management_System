package com.cognizant.library.model;

import java.util.Date;

public class UserModel {
	private String firstname;
	private String lastname;
	private Date dob;
	private String gender;
	private int contactno;
	private String email;
	private String userid;
	private String password;
	
	
	
	
	
	public UserModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserModel(String firstname, String lastname, Date dob, String gender, int contactno, String email, String password, String userid) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.dob = dob;
		this.gender = gender;
		this.setContactno(contactno);
		this.email = email;
		this.userid = userid;
		this.password = password;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public int getContactno() {
		return contactno;
	}
	public void setContactno(int contactno) {
		this.contactno = contactno;
	}
	
	
}
