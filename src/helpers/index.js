export function getRandomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function sortByObjValue(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    
    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return ((order === 'desc') ? (comparison * -1) : comparison);
  };
}

export function checkObjectFieldsForTrueValue(obj) {
  let falseResult = 0;
  
  
  for (let key in obj) {
    if (!obj[key]) {
      falseResult++;
    }
  }
  return falseResult <= 0;
}

export function returnObjFieldByValue(searchObj, value) {
  const index = searchObj.findIndex((el) => el.name === value);
  return searchObj[index].value;
}
