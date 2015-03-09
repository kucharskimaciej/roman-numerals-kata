import _ from 'lodash';
import Roman from '../Roman.js'

let convertTest, ct;

convertTest = ct = (input, result) => {
  it(`converts ${input} to ${result}`, () => {
      expect((new Roman(input)).convert()).toBe(result);
  });
};

describe('Roman', () => {
    it('is Defined', () => {
        expect(Roman instanceof Function).toBeTruthy()
    });

    it('has a map of numerals', () => {
        expect((new Roman).map).toBeDefined()
    });

    ct(undefined, null);

    ct(0, null);

    describe('Roman:convert -- ones', () => {
        ct(1, 'I');
        ct(2, 'II');
        ct(3, 'III');
        ct(4, 'IV');
        ct(5, 'V');
        ct(6, 'VI');
        ct(7, 'VII');
        ct(8, 'VIII');
        ct(9, 'IX');
    });

    describe('Roman:convert -- tens', () => {
        ct(10, 'X');
        ct(11, 'XI');
        ct(12, 'XII');
        ct(13, 'XIII');
        ct(14, 'XIV');
        ct(15, 'XV');
        ct(19, 'XIX');

        ct(29, 'XXIX');

        ct(51, 'LI');
        ct(54, 'LIV');
        ct(90, 'XC');
        ct(99, 'XCIX');
    });

    describe('Roman:convert -- hundredths',  () => {
        ct(100, 'C');
        ct(200, 'CC');
        ct(400, 'CD');
        ct(448, 'CDXLVIII');
        ct(555, 'DLV');
        ct(672, 'DCLXXII');
    });

    describe('Roman:convert -- thousands',  () => {
        ct(1000, 'M');
        ct(2751, 'MMDCCLI');
        ct(1998, 'MCMXCVIII');
    });
});