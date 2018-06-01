export function moveToward (argsArray) {
  var start = argsArray[0];
  var end = argsArray[1];
  var val = argsArray[2];

  if ( start < end ) {
    return Math.min(start + val, end);
  } else {
    return Math.max(start - val, end);
  }
}

// var _start, _end, _val;
//
// _start = argument0;
// _end = argument1;
// _val = argument2;
//
// if (_start < _end ) {
//     return min(_start + _val, _end);
// } else {
//     return max(_start - _val, _end);
// }
