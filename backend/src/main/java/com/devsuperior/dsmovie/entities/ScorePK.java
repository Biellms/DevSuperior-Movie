// Chaves compostas
package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable{

	private static final long serialVersionUID = 1L;
	
	// Atributos
	@ManyToOne
	@JoinColumn(name = "movie_id")
	private Movie movie;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	// Contructors
	public ScorePK() {
		
	}

	public ScorePK(Movie movie, User user) {
		super();
		this.movie = movie;
		this.user = user;
	}

	// Getters and Setters
	public Movie getMovie() { return movie; }

	public void setMovie(Movie movie) { this.movie = movie; }

	public User getUser() { return user; }

	public void setUser(User user) { this.user = user; }
	
}
