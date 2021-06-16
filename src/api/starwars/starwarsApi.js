import { API_URL } from '../constants';


export const getAllPeople = () => {
  return fetch(`${API_URL}people`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}

export const getPeople = (id) => {
  return fetch(`${API_URL}people/${id}`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}

export const getAllPlanets = () => {
  return fetch(`${API_URL}planets`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}

export const getPlanet = (id) => {
  return fetch(`${API_URL}planets/${id}`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}

export const getAllMovies = () => {
  return fetch(`${API_URL}films`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}

export const getMovie = (id) => {
  return fetch(`${API_URL}films/${id}`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}
