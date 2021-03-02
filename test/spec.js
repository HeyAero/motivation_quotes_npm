// some code
const motiQuote = require('../src/motivationQuote');

describe('moti quote', () => {
  describe('provide quote', () => {
    let giveQuote = motiQuote.giveQuote;

    test('it returns a motivational quote', () => {
      expect(giveQuote().toExpect('keep going'));
    });
  });
});
