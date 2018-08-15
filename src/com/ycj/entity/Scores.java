package com.ycj.entity;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Scores entity. @author MyEclipse Persistence Tools
 */

public class Scores implements java.io.Serializable {

	// Fields

	private Integer id;
	private Float score;
	private String comments;
	private String username;
	private String moviename;
	private Timestamp date;

	// Constructors

	/** default constructor */
	public Scores() {
	}

	/** minimal constructor */
	public Scores(String username, String moviename) {
		this.username = username;
		this.moviename = moviename;
	}

	/** full constructor */
	public Scores(Float score, String comments, String username, String moviename, Timestamp date) {
		this.score = score;
		this.comments = comments;
		this.username = username;
		this.moviename = moviename;
		this.date = date;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Float getScore() {
		return this.score;
	}

	public void setScore(Float score) {
		this.score = score;
	}

	public String getComments() {
		return this.comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMoviename() {
		return this.moviename;
	}

	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}

	public Timestamp getDate() {
		return this.date;
	}


	public void setDate(Timestamp date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\",\"score\":\"" + score + "\",\"comments\":\"" + comments + "\",\"username\":\""
				+ username + "\",\"moviename\":\"" + moviename + "\",\"date\":\"" + date + "\"}";
	}

}