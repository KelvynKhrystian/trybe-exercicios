var volumes = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert3(value, fromUnit, toUnit) {
    var fromIndex = volumes.indexOf(fromUnit);
    var toIndex = volumes.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
console.log(convert3(135, 'kl', 'ml'));
