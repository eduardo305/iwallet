const initialState = {
	error: ''
};

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ERROR':
			return { ...state, error: action.payload };
		case 'RESET_ERROR':
			return { ...state, ...initialState };
		default:
			return state;
	}
};

export default errorReducer;
