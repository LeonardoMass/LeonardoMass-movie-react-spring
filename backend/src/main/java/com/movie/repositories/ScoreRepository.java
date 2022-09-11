package com.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.entities.Score;
import com.movie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
