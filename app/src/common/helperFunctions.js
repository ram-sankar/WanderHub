export function numberWithCommas(x, type='INR') {
  if (type === 'INR'){
    x = x.toString();
    let lastThree = x.substring(x.length-3);
    let otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}