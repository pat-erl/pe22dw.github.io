"use strict";

// Funktioner för att spara och hämta antalet marker i local storage.

var GameProgress = {
    
    save: function() {
        
        localStorage.setItem('playerchips', Game.playerChips);
    },
    
    load: function() {
        
        Game.playerChips = localStorage.getItem('playerchips');
    },
    
    erase: function() {
        
        localStorage.removeItem("playerchips");  
    },
};