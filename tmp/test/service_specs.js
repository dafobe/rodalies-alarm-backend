
import {expect} from 'chai';

import {getHelloAll, getHello} from '../src/services/dummyService';

describe('Service logic', () => {

  describe('call Hello World', () => {

    it('call without params', () => {
      const result = getHelloAll();
      expect(result).to.equal('Hello World');
    });

    it('call with params', () => {
      const name = 'User';
      const result = getHello(name);

      expect(result).to.equal(`Hello dear ${name}`);
    });
  });
});