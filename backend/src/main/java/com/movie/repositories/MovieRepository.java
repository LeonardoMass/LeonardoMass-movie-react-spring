package com.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
