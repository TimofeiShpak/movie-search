import { translated } from './search';

describe('translated', () => {
    test('works with promises', () => {
        expect.assertions(2);
        expect(translated('мечта')).toBeDefined();
        expect(translated('мечта')).toBeInstanceOf(Object);
        });
});
