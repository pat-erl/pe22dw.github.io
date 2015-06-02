"use strict";

// Funktioner för spelbordet.

var Table = {
    
    fadeTable: function() {
        
        Game.gameArea.style.opacity = "0.7";
    },
    
    showTable: function() {
        
        Game.gameArea.style.opacity = "1";
    },
    
    fadeBetSelect: function() {
        
        Game.betSlider.disabled = true;
        Game.betSlider.style.opacity = 0.3;
        Game.betNumber.disabled = true;
        Game.betNumber.style.visibility = "hidden";
    },
    
    showBetSelect: function() {
        
        Game.betSlider.disabled = false;
        Game.betSlider.style.opacity = 1;
        Game.betNumber.disabled = false;
        Game.betNumber.style.visibility = "visible";
    },
};