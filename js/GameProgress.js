"use strict";

// Funktioner för att spara och hämta antalet marker i local storage.

var GameProgress = {
    
    save: function() {
        
        localStorage.setItem('playerchips', Game.playerChips);
    },
    
    load: function() {
        
        Game.playerChips = parseInt(localStorage.getItem('playerchips'),10);
    },
    
    erase: function() {
        
        localStorage.removeItem("playerchips");  
    },
};