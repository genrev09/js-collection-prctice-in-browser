'use strict';

function collectSameElements(collectionA, objectB) {
  var final_array = [];
  
  collectionA.forEach((collection1)=>Object.values(objectB)[0].forEach((collection2)=>
  {
    if(collection1 === collection2){
      final_array.push(collection1)
    }
  }
  ));
  return final_array;
}
