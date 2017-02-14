import {List, Map, fromJS} from 'immutable';

export function addNotification (state, entry){

	const notification = Map(entry);
	const notifications = state.getIn(['notifications'], List()).set('lastNotification', notification);

	return state.push(notification);
}

export function getLastNotification (state){

	const notifications = state.getIn(['lastNotification'], List());

	return state.getIn(['lastNotification'], List());;
}