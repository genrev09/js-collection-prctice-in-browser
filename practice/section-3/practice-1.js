'use strict';

function createUpdatedCollection(collectionA, objectB) {
  Object.values(objectB)[0].forEach(elementB => collectionA.forEach(elementA => {
    if (elementB === elementA.key) {
      elementA.count -= 1;
    }
  }));

  return collectionA;
}
