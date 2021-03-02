const quoteArray = [
  'All our dreams can come true, if we have the courage to pursue them.',
  'The secret of getting ahead is getting started.',
  'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.',
  'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.',
  'The best time to plant a tree was 20 years ago. The second best time is now.',
];

function giveQuote(array) {
  let quote = array[Math.floor(Math.random() * array.length)];

  return quote;
}

function getQuote() {
  return giveQuote(quoteArray);
}

module.exports = {
  giveQuote,
  getQuote,
};
