"use strict";

// Funktioner för att spara, hämta och ta bort antalet marker i local storage.

var GameProgress = {
    
    save: function() {
        
        localStorage.setItem('playerchips', Game.playerChips);
    },
    
    retrieve: function() {
        
        Game.playerChips = parseInt(localStorage.getItem('playerchips'),10);
    },
    
    erase: function() {
        
        localStorage.removeItem("playerchips");  
    },
};