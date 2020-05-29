import solution from './query-string'
const address = 'amazon.com/search?page=10&per=5';
const actual = solution(address, { page: 100, per: 8, order: 'desc' });
console.log(actual)
// amazon.com/search?page=100&per=8&order=desc