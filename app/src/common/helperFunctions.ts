export function numberWithCommas(x: number, type='INR') {
  if (type === 'INR'){
    let convertedString = x.toString();
    let lastThree = convertedString.substring(convertedString.length-3);
    let otherNumbers = convertedString.substring(0,convertedString.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}