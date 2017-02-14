import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {addNotification, getLastNotification} from '../notifications_core';

describe('Notifications', () => {
	describe('set Notifications', () => {
		it('add Notification to notifications list', () => {
			const state = List.of(
								Map({id: '1', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '}), 
								Map({id: '2', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '}), 
								);
			const entry = {id: '3', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '};
			const nextState = addNotification(state, entry);
			
			expect(nextState).to.equal(List.of(
				Map({id: '1', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '}), 
				Map({id: '2', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '}), 
				Map({id: '3', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '}), 
				));
		});
		
	});

	describe('get Last Notification', () => {
		it('get Last Notification if there are notifications', () => {
			const state = Map({lastNotification: Map({id: '1', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '})});
			
			const nextState = getLastNotification(state);
			
			expect(nextState.get('lastNotification')).to.equal(Map({id: '1', type: 'tweet', severity: 'high', description: 'R2 sud retards 30 minuts '}));
		});

		it('get Last Notification if there aren\'t notifications yet', () => {
			const state = Map();
			
			const nextState = getLastNotification(state);
			
			expect(nextState).to.equal(List());
		});
	});
});