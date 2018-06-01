var _vx, _vy, _collision;

_vx = argument[0];
_vy = argument[1];
_collision = false;

repeat ( max(abs(_vx), abs(_vy)) ) {
    for (var i = 2; i < argument_count; i++) {
        //if ( place_meeting(x + sign(_vx), y + sign(_vy), argument[i]) ) {
        if ( place_meeting(x, y, argument[i]) ) {
            _collision = true;
            break;
        }
    }
    
//    if (!_collision) {
//        x += vx;
//        y += vy;
//    } else {
//        break;
//    }
    
}

return _collision;
