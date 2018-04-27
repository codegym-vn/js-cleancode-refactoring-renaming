'use strict';
var expect = require('chai').expect;
var assert = require('chai').assert;
var calculate = require('../calculator');

describe('Calculator', function() {
    it('Addition: 1 + 1 = 2', function() {
        var a = 1;
        var b = 1;
        var o = '+';
        var expected = 2;

        var result = calculate(a, b, o);

        expect(result).to.equal(expected);
    });

    it('Subtraction: 2 - 1 = 1', function() {
        var a = 2;
        var b = 1;
        var o = '-';
        var expected = 1;

        var result = calculate(a, b, o);

        expect(result).to.equal(expected);
    });

    it('Multiplication: 2 * 2 = 4', function() {
        var a = 2;
        var b = 2;
        var o = '*';
        var expected = 4;

        var result = calculate(a, b, o);

        expect(result).to.equal(expected);
    });

    it('Division: 6 / 3 = 2', function() {
        var a = 6;
        var b = 3;
        var o = '/';
        var expected = 2;

        var result = calculate(a, b, o);

        expect(result).to.equal(expected);
    });

    it('= is a wrong operator', function() {
        var a = 2;
        var b = 0;
        var o = '=';
        var expected = 4;
        assert.throws(function(){
            calculate(a, b, o);
        }, "Unsupported operation");
    });
});