function dynamicSort(propName, order) {
    let sortOrder =  (order == false) ? -1: 1; 

    return function (a, b) {
      let result;
      if (a[propName] < b[propName]) {
        result = -1;
      } 
      else if (a[propName] > b[propName]) {
        result = 1;
      } 
      else {
        result = 0;
      }
      return result * sortOrder;
    };
}

const contacts = [
    { name: 'Tom', phoneNumber: '098-76-54-352'},
    { name: 'Peter', phoneNumber: '098-54-54-652', },
    { name: 'Ann', phoneNumber: '050-711-21-21', },
];
contacts.sort(dynamicSort('name', true));
console.log(contacts);
