'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(a => Object.values(objectB)[0].includes(a));
}
