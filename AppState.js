import { useReducer } from 'react';

const initialState = {
	message: ''
};

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ERROR':
			return { ...state, message: action.payload };
		case 'RESET_ERROR':
			return { ...state, ...initialState };
		default:
			return state;
	}
};

// const mainReducer = () => ({
// 	error: errorReducer
// });

const AppState = React.createContext({});

const AppStateProvider = props => {
	const [error, stateDispatch] = useReducer(errorReducer, initialState);

	return (
		<AppState.Provider value={{ error, stateDispatch }}>
			{props.children}
		</AppState.Provider>
	);
};

export { AppState, AppStateProvider };
