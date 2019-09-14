'use strict';

function countSameElements(collection) {
  var v_fin_array = [];
  var v_head = '';
  var v_count = 1;

  collection.forEach(element => {
    if (element !== v_head) {
      if (v_head !== '') {
        var v_obj = {key: v_head, count: v_count};
        v_fin_array.push(v_obj);
      }
      v_head = element;
      v_count = 1;
    } else {
      v_count++;
    }
  });
  var tmp_array = v_head.split("-");
  var v_obj = {key: tmp_array[0], count: Number(tmp_array[1])};
  v_fin_array.push(v_obj);
  return v_fin_array;
}
