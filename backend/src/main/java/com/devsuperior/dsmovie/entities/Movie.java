// Model
package com.devsuperior.dsmovie.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_movie")
public class Movie {
	
	// Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private Double score;
	private int count;
	private String image;
	
	@OneToMany(mappedBy = "id.movie")
	private Set<Score> scores = new HashSet<>();
	
	// Contructors
	public Movie() {
		
	}
	
	public Movie(Long id, String title, Double score, int count, String image) {
		super();
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
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

	public Set<Score> getScores() {
		return scores;
	}
	
	
}
