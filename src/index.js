const sortBy = (arr, prop, desc) => {
    if (!(arr instanceof Array))
      {console.error("sortBy Error:", "arr is not an array");}
    let newArr = [];
    let props = [];
    let sortNumber = false;
  
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      let propData = (item && item[prop]) || '';
      (props[i] = new String(propData))._obj = item;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i][prop] === 'number') {
        sortNumber = true;
        break;
      } else {
        if (typeof arr[i][prop] === 'string') {
          sortNumber = false;
          break;
        }
      }
    }
    if (sortNumber) {
      props.sort((a, b) => a - b);
    } else {
      props.sort();
    }
  
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = props[i]._obj;
    }
    if (desc === 'desc') newArr.reverse();
    return newArr;
  };
  export default sortBy;  