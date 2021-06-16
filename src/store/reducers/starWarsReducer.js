const initialState = { 
	peoples: [],
  movies: [],
  planets: []
};

export function starWars(state = initialState, action) {
  switch (action.type) {
    case 'SET_PEOPLES':
      return {
        ...state,
        peoples: action.payload,
      };

    case 'SET_PLANETS':
      return {
        ...state,
        planets: action.payload,
      };

    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}
