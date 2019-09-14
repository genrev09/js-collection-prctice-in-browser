'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  var v_subtract = 1;
  var v_prev = 0;
  var v_prev_element = '';
  var v_count = 0;
  
  collectionA.forEach(elementA => {
    if (elementA === v_prev_element || v_prev_element === '') {
      v_count++;
    } else {
      collectionC.push({key: v_prev_element, count: v_count});
      v_count = 1;
    }
    v_prev_element = elementA;
  });
  collectionC.push({key: v_prev_element, count: v_count});

  Object.values(objectB)[0].forEach(elementB => collectionC.forEach(elementC => {
    if (elementB === elementC.key) {
      if (elementC.count !== 3 && v_prev !== 3) {
        v_subtract++;
      }
      v_prev = elementC.count;
      elementC.count-= (v_subtract);
    }
  }));

  return collectionC;
}
