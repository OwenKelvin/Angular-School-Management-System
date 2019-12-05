import { OrdinalPipe } from './ordinal.pipe';

describe('ORDINAL PIPE', () => {
    let pipe: OrdinalPipe;
    beforeEach(() => {
        pipe = new OrdinalPipe();
    });
    it('Should return "1st" when value is 1', () => {
        expect(pipe.transform(1)).toBe('1st');
    });
    it('Should return "2nd" when value is 2', () => {
        expect(pipe.transform(2)).toBe('2nd');
    });
    it('Should return "3rd" when value is 3', () => {
        expect(pipe.transform(3)).toBe('3rd');
    });
    it('Should return "11th" when value is 11', () => {
        expect(pipe.transform(11)).toBe('11th');
    });
    it('Should return "12th" when value is 12', () => {
        expect(pipe.transform(12)).toBe('12th');
    });
    it('Should return "13th" when value is 13', () => {
        expect(pipe.transform(13)).toBe('13th');
    });
    it('Should return "21st" when value is 21', () => {
        expect(pipe.transform(21)).toBe('21st');
    });
    it('Should return "21st" when value is 21', () => {
        expect(pipe.transform(22)).toBe('22nd');
    });
    it('Should return "50th" when value is 50', () => {
        expect(pipe.transform(50)).toBe('50th');
    });
});
