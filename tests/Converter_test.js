import _ from 'lodash';
import Converter from '../Converter.js'

let test_conversion_to_roman, test_conversion_to_arabic;

test_conversion_to_roman = (input, result) => {
  it(`converts ${input} to ${result}`, () => {
      expect(Converter.to_roman_numeral(input)).toBe(result);
  });
};

test_conversion_to_arabic = (input, result) => {
  it(`converts ${input} to ${result}`, () => {
      expect(Converter.to_arabic(input)).toBe(result);
  });
};

describe('Converter', () => {
    it('exposes a static to_roman_numeral method', () => {
        expect(Converter.to_roman_numeral instanceof Function).toBeTruthy();
    });

    it('exposes a static to_arabic method', () => {
        expect(Converter.to_arabic instanceof Function).toBeTruthy();
    });

    describe(':to_roman_numeral', () => {
        test_conversion_to_roman(0, undefined);
        test_conversion_to_roman(undefined, undefined);

        test_conversion_to_roman(1, 'I');
        test_conversion_to_roman(2, 'II');
        test_conversion_to_roman(3, 'III');
        test_conversion_to_roman(4, 'IV');
        test_conversion_to_roman(5, 'V');

        test_conversion_to_roman(8, 'VIII');
        test_conversion_to_roman(9, 'IX');
        test_conversion_to_roman(10, 'X');
        test_conversion_to_roman(11, 'XI');

        test_conversion_to_roman(19, 'XIX');
        test_conversion_to_roman(20, 'XX');

        test_conversion_to_roman(40, 'XL');
        test_conversion_to_roman(50, 'L');
        test_conversion_to_roman(49, 'XLIX');
        test_conversion_to_roman(45, 'XLV');


        test_conversion_to_roman(800, 'DCCC');
        test_conversion_to_roman(1984, 'MCMLXXXIV');

    });

    describe(':roman_to_arabic', () => {
        test_conversion_to_arabic('I', 1);

        test_conversion_to_arabic('I', 1);
        test_conversion_to_arabic('II', 2);
        test_conversion_to_arabic('III', 3);
        test_conversion_to_arabic('IV', 4);
        test_conversion_to_arabic('V', 5);

        test_conversion_to_arabic('VIII', 8);
        test_conversion_to_arabic('IX', 9);
        test_conversion_to_arabic('X', 10);
        test_conversion_to_arabic('XI', 11);

        test_conversion_to_arabic('XIX', 19);
        test_conversion_to_arabic('XX', 20);

        test_conversion_to_arabic('XL', 40);
        test_conversion_to_arabic('L', 50);
        test_conversion_to_arabic('XLIX', 49);
        test_conversion_to_arabic('XLV', 45);

        test_conversion_to_arabic('DCCC', 800);
        test_conversion_to_arabic('MCMLXXXIV', 1984);
    });
});
