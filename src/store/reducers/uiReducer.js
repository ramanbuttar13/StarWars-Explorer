let uiState = JSON.parse(localStorage.getItem('uiState'));
const initialState = uiState ? { uiState } : { 
	loading: false,
};

export function ui(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
