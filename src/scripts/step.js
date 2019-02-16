import {checkCollision} from './checkCollision';

///Player step, state model, movement, collision;

//Movement intent variables
let _vx = 0;
let _vy = 0;
let player_speed = 1;
let timer = 0;
let state = "IDLE";

//Input variables;

let up = false;
let down = false;
let left = false;
let right = false;

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

// Initialize scripts and variables;
init_game();
const global = {};

global.action = "DEFAULT";
global.gamestate = "IDLE";
global.story = 0;
global.timer = 0;

//anim_speed = 0.2;

switch (state) {
    case "IDLE": {
        global.gamestate = "TAPTIMER";
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

/// Gamestate management

//Move view frame towards player, in 64 x 64 blocks.
target_xview = (obj_player.x, div, 64) * 64;
target_yview = (obj_player.y, div ,64) * 64;
view_xview[0] = move_toward(view_xview[0], target_xview, 4);
view_yview[0] = move_toward(view_yview[0], target_yview, 4);
