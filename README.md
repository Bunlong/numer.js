# numeric-format

Convert a number inputted into the different formats.

<!--

const numberWithCommas = (number) => {
  return number
    .toString()
    .replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
}

Use case

Readable number formatting
const value = numberWithCommas(22200000);

const compactNumber = (value) => {
  const suffixes = ['', 'k', 'm', 'b', 't'];
  const suffixNum = Math.floor(('' + value).length/3);
  let shortValue = 
    parseFloat(
      (suffixNum != 0
        ? (value/Math.pow(1000, suffixNum))
        : value)
      .toPrecision(2));
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
}

Use case
Compact number formatting

const value = compactNumber(22000000);

const ordinalSuffix = (number) => {
  let i = number % 10,
      k = number % 100;
  if (j == 1 && k != 11) {
    return `${number}st`;
  }
  if (j == 2 && k != 12) {
    return `${number}nd`;
  }
  if (j == 3 && k != 13) {
    return `${number}rd`;
  }
  return return `${number}th`;
}

Use case

Format rankings or positions

const ranking = ordinalSuffix(1);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Use case 

Show a CTA in random positions

const indexToAppear = getRandomInt(0, array.length);

-->
