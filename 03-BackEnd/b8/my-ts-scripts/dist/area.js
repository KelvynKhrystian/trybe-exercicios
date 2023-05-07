"use strict";
const areas = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
function convert4(value, fromUnit, toUnit) {
    const fromIndex = areas.indexOf(fromUnit);
    const toIndex = areas.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
console.log(convert4(5, 'km2', 'm2'));
