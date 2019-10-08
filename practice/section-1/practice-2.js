'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(a => collectionB[0].includes(a));
}
