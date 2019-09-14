'use strict';

function collectSameElements(collectionA, collectionB) {
  var final_array = [];

  collectionA.forEach((collection1)=>collectionB[0].forEach((collection2)=>
  {
    if(collection1 === collection2){
      final_array.push(collection1)
    }
  }
  ));

  return final_array;
}
