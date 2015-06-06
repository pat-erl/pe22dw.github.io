"use strict";

// Funktioner för uppspelning av ljudeffekter och bakgrundsljud.

var Sound = {
    
    ambiance: new Audio('../audio/ambiance/casino.mp3'),
    shuffle: new Audio('../audio/soundeffects/shuffle2.wav'),
    chip: new Audio('../audio/soundeffects/pokerchips.wav'),
    card: new Audio('../audio/soundeffects/cardflip2.wav'),
    click: new Audio('../audio/soundeffects/click2.wav'),
    win: new Audio('../audio/soundeffects/success.wav'),
    doublewin: new Audio('../audio/soundeffects/win3.wav'),
    blackjack: new Audio('../audio/soundeffects/win2.wav'),
    tie: new Audio('../audio/soundeffects/win.wav'),
    cashing: new Audio('../audio/soundeffects/cashregister2.wav'),
    welcomeback: new Audio('../audio/soundeffects/welcomeback.wav'),
    lose: new Audio('../audio/soundeffects/lose3.wav'),
    swipe: new Audio('../audio/soundeffects/swipe.wav'),
    
    ambianceStart: function() {
        
        Sound.ambiance.volume = 0.1;
        Sound.ambiance.loop = true;
        Sound.ambiance.play();
        
        Game.ambianceOn = true;
    },
    
    shuffleStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.shuffle.load();
            Sound.shuffle.volume = 0.4;
            Sound.shuffle.play();
            
            setTimeout(function() {
                
                Sound.shuffle.pause();
                
            },1000);
        }
    },
    
    chipStart: function() {
        
        if(Game.soundOn === true) {
        
            Sound.chip.volume = 0.4;
            Sound.chip.play();
        }
    },
    
    cardStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.card.volume = 0.3;
            Sound.card.currentTime = "0.5";
            Sound.card.play();
        }
    },
    
    clickStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.click.volume = 0.3;
            Sound.click.play();
        }
    },
    
    winStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.win.volume = 0.2;
            Sound.win.play();
        }
    },
    
    doublewinStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.doublewin.volume = 0.2;
            Sound.doublewin.play();
        }
    },
    
    blackjackStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.blackjack.volume = 0.2;
            Sound.blackjack.play();
        }
    },
    
    tieStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.tie.volume = 0.3;
            Sound.tie.play();
        }
    },
    
    cashingStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.cashing.volume = 0.1;
            Sound.cashing.play();
        }
    },
    
    welcomebackStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.welcomeback.play();
        }
    },
    
    loseStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.lose.volume = 0.3;
            Sound.lose.play();
        }
    },
    
    swipeStart: function() {
        
        if(Game.soundOn === true) {
            
            Sound.swipe.volume = 0.3;
            Sound.swipe.currentTime = "0.2";
            Sound.swipe.play();
        }
    },
    
    allStop: function() {
        
        Game.soundOn = false;
    },
    
    allStart: function() {
        
        Game.soundOn = true;
    },
    
    ambianceStop: function() {
      
        Sound.ambiance.pause();
        Game.ambianceOn = false;
    },
};