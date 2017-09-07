import { createSelector } from 'reselect';

export default selector =>
	createSelector(selector, props => ({
		...props,
	}));
