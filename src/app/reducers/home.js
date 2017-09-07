import { handleActions } from 'redux-actions';
import * as types from 'constants/action-types';

const initialState = {
	loading: true,
	library: {},
};

const handler = {};

handler[types.RECEIVE_BOX_LIBRARY] = (state, action) => {
	const { library } = action;
	return {
		...state,
		loading: false,
		library,
	};
};

export default handleActions(handler, initialState);
