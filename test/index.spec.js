'use strict';

const { expect } = require('chai');
const { format } = require('../index');

describe('Unit Formatter', () => {
    describe('By default', () => {
        it('should return the number without any changes', () => {
            const x = Date.now();
            const result = format(x);
            expect(result).to.equal(x);
        });
    });

    describe('Timestamp', () => {
        it('should add ms to milliseconds', () => {
            const value = 999;
            const result = format(value, 'timestamp');
            expect(result).to.equal('999ms')
        });

        it('should add s to seconds', () => {
            const value = 59999;
            const result = format(value, 'timestamp');
            expect(result).to.equal('59.999s')
        });

        it ('should add m to minutes', () => {
            const value = 60001;
            const result = format(value, 'timestamp');
            expect(result).to.equal('1m')
        });
    });
});