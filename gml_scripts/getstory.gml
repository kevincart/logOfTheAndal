//MOVE BELOW TO NEW SCRIPT FUNCTION CALL: getstory(player.x, player.y);
//Room tracker
    global.story = global.playerroom[1];
    story = global.story;

    
//Check for story changes and advance text.;
if (global.gamestate == "TAPTIMER"){
    global.print =    
    "...";
    global.story = global.playerroom[1];
}

if (global.story == 0) {
    global.print = 
    "story 0";
}
    
if (global.story == 1) {
    global.print =
    "story 1";

} /*else if (global.story > 1) {
    global.print = global.story
}*/

/* draw_text(100, 100, "-{ " + string(global.playerroom[0]) + " , " + string(global.playerroom[1]));
global.playerroom[0]
global.playerroom[1]
