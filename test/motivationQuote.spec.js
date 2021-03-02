// some code
const motiQuote = require('../src/motivationQuote');

describe('moti quote', () => {
  describe('provide quote', () => {
    let giveQuote = motiQuote.giveQuote;
    let quote = ['Keep going champ!'];
    test('it returns a motivational quote', () => {
      expect(giveQuote(quote)).toBe('Keep going champ!');
    });
  });
});
