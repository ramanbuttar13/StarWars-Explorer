export const setPeoples = (people) => {
  return {
    type: 'SET_PEOPLES',
    payload: people,
  };
};

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};

export const setPlanets = (planets) => {
  return {
    type: 'SET_PLANETS',
    payload: planets,
  };
};