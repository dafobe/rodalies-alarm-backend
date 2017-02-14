import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

describe('immutability', () => {

  describe('Numbers', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('are immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('Lists', () => {

    function addEntry(currentState, entry) {
      return currentState.push(entry);
    }

    it('are immutable', () => {
      let state = List.of('1', '2');;
      let nextState = addEntry(state, '3');

      expect(nextState).to.equal(List.of(
        '1',
        '2',
        '3'
      ));
      expect(state).to.equal(List.of(
        '1',
        '2'
      ));
    });
  });

  describe('Native Arrays', () => {

    function addEntry(currentState, entry) {
      let currentStateList = fromJS(currentState);

      return currentStateList.push(entry).toJS();
    }

    it('are immutable', () => {
      let state = ['1', '2'];
      let nextState = addEntry(state, '3');

      expect(nextState.toString()).to.equal(['1','2','3'].toString());
      expect(state.toString()).to.equal(['1','2'].toString());
    });
  });

  describe('Maps', () => {

    function addEntry(currentState, entry) {
            return currentState.merge(entry);
    }

    it('are immutable', () => {
      let state = Map({a:'a', b:'b'});
      let nextState = addEntry(state, {c:'c'});

      expect(nextState).to.equal(fromJS({a:'a',b:'b', c:'c'}));
      expect(state).to.equal(fromJS({a:'a',b:'b'}));
    });
  });
});