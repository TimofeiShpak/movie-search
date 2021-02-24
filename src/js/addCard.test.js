import { getMovieData, getDataMovie } from './addCard';

describe('getMovieData', () => {
    test('works with promises', () => {
        expect(getMovieData('dream')).toBeDefined();
        expect(getMovieData('dream')).toBeInstanceOf(Object);
        });
});

describe('addCards', () => {
    test('works with promises', () => {
        expect(getDataMovie('dream')).toBeDefined();
        expect(getDataMovie('dream')).toBeInstanceOf(Object);
        });
});
