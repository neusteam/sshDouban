package com.ycj.web;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;
import com.ycj.entity.Movieinfo;
import com.ycj.entity.Scores;
import com.ycj.service.MovieService;
import com.ycj.service.ScoresService;

public class ScoresAction extends ActionSupport {
 @Autowired
 private ScoresService scoresService;
 private Scores scores;
public Scores getScores() {
	return scores;
}
public void setScores(Scores scores) {
	this.scores = scores;
}
public String addComments() throws IOException{
	HttpServletRequest request=ServletActionContext.getRequest();
	request.setCharacterEncoding("UTF-8");
	scores.setDate(new Timestamp(0));
	System.out.println(scores.getMoviename());
	this.scoresService.addComment(this.scores);
	return SUCCESS;
}
}
