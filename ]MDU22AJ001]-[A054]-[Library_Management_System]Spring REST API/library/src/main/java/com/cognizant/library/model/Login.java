package com.cognizant.library.model;

public class Login 	{
	private String userId;
	private String password;
	private String role;
	
	public Login() {
		
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Login(String userId, String password, String role) {
		super();
		this.userId = userId;
		this.role = role;
		this.password = password;
	}
	
}
