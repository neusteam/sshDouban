package com.ycj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ycj.dao.ScoresDAO;
import com.ycj.entity.Scores;
@Transactional
@Service("scoresService")
public class ScoresServiceImpl implements ScoresService {
	@Autowired
	private ScoresDAO scoresDAO;
	
	public int addComment(Scores score){
		this.scoresDAO.save(score);
		return 0;
	}
}
