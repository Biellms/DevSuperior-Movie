package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Movie;

public class MovieDTO {

	// Atributos
	private Long id;
	private String title;
	private Double score;
	private int count;
	private String image;
	
	// Contructors
	public MovieDTO() {
		
	}
	
	public MovieDTO(Long id, String title, Double score, int count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
	public MovieDTO(Movie movie) {
		id = movie.getId();
		title = movie.getTitle();
		score = movie.getScore();
		count = movie.getCount();
		image = movie.getImage();
	}

	// Getters and Setters
	public Long getId() { return id; }

	public void setId(Long id) { this.id = id; }

	public String getTitle() { return title; }

	public void setTitle(String title) { this.title = title; }

	public Double getScore() { return score; }

	public void setScore(Double score) { this.score = score; }

	public int getCount() { return count; }

	public void setCount(int count) { this.count = count; }

	public String getImage() { return image; }

	public void setImage(String image) { this.image = image; }
	
}
