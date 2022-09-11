package com.movie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.repositories.MovieRepository;
import com.movie.repositories.ScoreRepository;
import com.movie.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private ScoreRepository scoreRepository;
	@Autowired
	private UserRepository userRepository;
	
	
	
}
