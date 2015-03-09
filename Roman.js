
class Roman {
    get numerals () {
        return {
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M'
        };
    }
    get map () {
        return this._map;
    }

    get sortedMapValues () {
        return Object.keys(this.map).sort( this.compareNumeralValues ).reverse();
    }

    constructor (digit) {
        this.digit = parseInt(digit, 10);
        this._map = this._getMap();
    }

    convert () {
        let input = this.digit, result = '';
        while(input && input > 0) {
            let r = this.getLowerOrEqualThan(input);
            result += r.numeral;
            input -= r.value;
        }
        return result || null;
    }

    compareNumeralValues (a, b) {
        return a - b
    }

    getLowerOrEqualThan (input) {
        let idx = _.find(this.sortedMapValues, (n) => parseInt(n, 10) <= input );

        return {
            numeral: this.map[idx],
            value: idx
        };
    }

    // MAP PREPARATION

    _getMap () {
        if (!this.map || !Object.keys(this.map).length) {
            this._map = {};
            Object.keys(this.numerals).sort( this.compareNumeralValues ).map( (n) => parseInt(n, 10) ).forEach( this._prepareNumeral, this );
        }
        return this.map;
    }

    _prepareNumeral (n, i) {
        let l = this._lowestNumeralOfOrder(n); // lowest numeral of current numeral's order
        if(i > 0) this._map[n - l] = this.numerals[l] + this.numerals[n];
        this._map[n] = this.numerals[n];
    }

    _lowestNumeralOfOrder (num) {
        return Math.pow( 10, Math.floor(Math.log(num - 1)/Math.LN10) );
    }
}

module.exports = Roman;