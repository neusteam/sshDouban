package com.ycj.service;

import java.util.List;

import com.ycj.entity.Scores;

public interface ScoresService {
public int addComment(Scores score);
public List<Scores> findComments(String moviename);	

}
