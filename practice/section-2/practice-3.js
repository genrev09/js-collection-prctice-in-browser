'use strict';

function countSameElements(collection) {
  var v_fin_array = [];
  var v_head = '';
  var v_count = 1;

  collection.forEach(element => {
    var tmp_array = element.split(":").join(' ').split("-").join(' ').split("[").join(' ').split(" ");
    if (element !== v_head && tmp_array[0] !== v_head) {
      // Current character is different than previous character
      if (v_head !== '') {
        var v_obj = {name: v_head, summary: v_count};
        v_fin_array.push(v_obj);
      }
      // character has a delimiter
      if (element.length > 1) {
        v_head = tmp_array[0];
        v_count = Number(tmp_array[1].replace("]", ""));
      } else {
        v_head = element;
        v_count = 1;
      }
    // Same character
    } else {
      if (element.length > 1) {
        v_count+= Number(tmp_array[1].replace("]", ""));
      } else {
        v_count++;
      }
    }
  });
  // push last character
  var v_obj = {name: v_head, summary: Number(v_count)};
  v_fin_array.push(v_obj);
  return v_fin_array;
}
