class Converter {
    static get arabic_roman_map () {
        return {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M'
        }
    }

    static get roman_arabic_map () {
        let romans = {};
        Object.keys(Converter.arabic_roman_map).forEach((r) => {
            romans[Converter.arabic_roman_map[r]] = parseInt(r, 10);
        });
        return romans;
    }

    static get arabics () {
        return Object.keys(Converter.arabic_roman_map)
            .map((a) => parseInt(a, 10)).reverse();
    }

    static convert_to_roman (arabic, arabics, result) {
        while (arabic > 0) {
            let biggest_numeral_index = _.find(arabics, (a) => arabic >= a);
            arabic -= biggest_numeral_index;
            result += Converter.arabic_roman_map[biggest_numeral_index];
        }
        return result || undefined;
    }
    static to_arabic (roman) {
        return Converter.convert_to_arabic.call(null, roman, Converter.roman_arabic_map, 0);
    }

    static to_roman_numeral (arabic) {
        return Converter.convert_to_roman.call(null, arabic, Converter.arabics, '');
    }

    static convert_to_arabic (roman, romans, result) {
        while(roman.length)
            [2,1].some((c) => {
                let ss = roman.substring(0, c);
                return (ss && romans[ss]) && ([result, roman] = [result + romans[ss], roman.substring(c)]);
            });

        return result;
    }
}

module.exports = Converter;