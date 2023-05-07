"use strict";
const volumes = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert3(value, fromUnit, toUnit) {
    const fromIndex = volumes.indexOf(fromUnit);
    const toIndex = volumes.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
console.log(convert3(135, 'kl', 'ml'));
