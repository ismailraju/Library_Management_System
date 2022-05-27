package com.cognizant.library.model;

public class BookModel {
		private int booknumber;
		private String bookname;
		private String author;
		private String subject;
		
		
		
		public BookModel() {
			super();
			// TODO Auto-generated constructor stub
		}
		public BookModel(int booknumber, String bookname, String author, String subject) {
			super();
			this.booknumber = booknumber;
			this.bookname = bookname;
			this.author = author;
			this.subject = subject;
		}
		public int getBooknumber() {
			return booknumber;
		}
		public void setBooknumber(int booknumber) {
			this.booknumber = booknumber;
		}
		public String getBookname() {
			return bookname;
		}
		public void setBookname(String bookname) {
			this.bookname = bookname;
		}
		public String getAuthor() {
			return author;
		}
		public void setAuthor(String author) {
			this.author = author;
		}
		public String getSubject() {
			return subject;
		}
		public void setSubject(String subject) {
			this.subject = subject;
		}
		
		
		
}
