import {checkCollision} from './checkCollision';

///Player step, state model, movement, collision;

//Movement intent variables
let _vx = 0;
let _vy = 0;

/// Room declarer

// let i;
// i = 2;
// repeat(i) {
//     global.playerroom[i] = 0;
//     i -= 1;
// }

// global.playerroom[0] = (x div 64)
// global.playerroom[1] = (y div 64)

/// Input checks;

 if (up) state = "UP";
 if (down) state = "DOWN";
 if (left) state = "LEFT";
 if (right) state = "RIGHT";
 if (!up && !down && !left && !right) state = "IDLE";

// if (input.button_a) state = "ATTACK_SWORD_START";

/// State model;

//anim_speed = 0.2;

switch (state) {
    case "IDLE": {
        global.gamestate = "TAPTIMER";
//        if(global.gamestate != "TAPTIMER") {
//            global.print = "Tap here for actions."
//        };
        vx = 0;
        vy = 0;
        check_inputs_all();
        break;
    }

    case "UP": {
        global.print = "-";
        vx += 0;
        vy -= 1;
        checkCollision(vx, vy, obj_collision);
        // check_inputs_all();
        break;
    }
    case "DOWN": {
        global.print = "-";
        vx -= 0;
        vy += 1;
        checkCollision(vx, vy, obj_collision);
        // check_inputs_all();
        break;
    }
    case "LEFT": {
        global.print = "-";
        vx -= 1;
        vy -= 0;
        checkCollision(vx, vy, obj_collision);
        // check_inputs_all();
        break;
    }
    case "RIGHT": {
        global.print = "-";
        vx += 1;
        vy += 0;
        checkCollision(vx, vy, obj_collision);
        // check_inputs_all();
        break;
    }
}

//x += vx;
//y += vy;
