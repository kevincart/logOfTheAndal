//MOVE BELOW TO NEW SCRIPT FUNCTION CALL: getAction(player.x, player.y);
//Room tracker
//Sets global.story to playerroom array content.
    //global.story = global.playerroom[1];
    //story = global.story;

    
//Check for collision with zone object, changes and advance text.;

//Global action checks and state machine.

//if (button_a) global.action = "SEARCH";
//if (!button_a) global.action = "DEFAULT";

switch (global.action) {
    case "SEARCH": {
        global.action = "SEARCH";
        global.story = "
        
        SEARCH FOR ITEMS..."
        check_inputs_all();
        
        break;
    }
    case "DEFAULT": {
        break;
    }
}

if (global.action == 0) {
    global.print = 
    "story 0";
}
    
if (global.story == 1) {
    global.print =
    "story 1";

} else if (global.story > 1) {
    global.print = global.story
}

/* draw_text(100, 100, "-{ " + string(global.playerroom[0]) + " , " + string(global.playerroom[1]));
global.playerroom[0]
global.playerroom[1]
