'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var v_subtract = 1;
  var v_prev = 0;
  
  Object.values(objectB)[0].forEach(elementB => collectionA.forEach(elementA => {
    if (elementB === elementA.key) {
      if (elementA.count !== 3 && v_prev !== 3) {
        v_subtract += 1;
      }
      v_prev = elementA.count;
      elementA.count-= (v_subtract);
    }
  }));

  return collectionA;
}
