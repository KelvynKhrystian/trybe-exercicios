// ./volume.ts

const volumesCubicos = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convert5(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = volumesCubicos.indexOf(fromUnit);
  const toIndex = volumesCubicos.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

console.log(convert5(2,'km³','cm³'))