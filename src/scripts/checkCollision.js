export function checkCollision (_coordArray, _collision = false) {
  // returns boolean
  let coordArray = _coordArray;
  let collision = _collision;

  return collision;
}

// repeat ( max(abs(_vx), abs(_vy)) ) {
//     for (var i = 2; i < argument_count; i++) {
//         if ( place_meeting(x + sign(_vx), y + sign(_vy), argument[i]) ) {
//             _collision = true;
//             break;
//         }
//     }
//
//     if (!_collision) {
//         x += vx;
//         y += vy;
//     } else {
//         break;
//     }
//
// }
//
// return _collision;
