'use strict';
/**
 * Author: Arek Jaworski
 */

/**
 * Format given number in selected units
 * 
 * @param {number} number 
 * @param {String} unit 
 * 
 * @returns {number|String}
 */
function format(number, unit) {
    switch(unit) {
        case 'memory':
            return formatMemory(number);
        case 'timestamp':
            return formatTimestamp(number);
        default: return number;
    }
}

/**
 * Format Timestamp
 * 
 * @param {number} milliseconds Milliseconds
 */
function formatTimestamp(milliseconds) {
    if (milliseconds < 1000) {
        return `${milliseconds}ms`;
    }
    if (milliseconds < 60000) {
        return `${milliseconds / 1000}s`;
    }
    if (milliseconds < 1000 * 60 * 60) {
        return `${milliseconds / 60000}m`; // TODO: Add rounding
    }
}

module.exports = { format };