"use strict";

var Strategy = {
    
    calculate: function() {
        
        // Uträkningar för bästa strategi i varje situation.
        
        var optimalDecision = "";
        
        if(Game.playerHasAce === 0) {
            
            // Hard hands - Händer som inte innehåller ess eller som räknar ess som 1.
            
            if(Game.playerScore >= 17) {
                
                optimalDecision = "YOU SHOULD STAND.";
            
            } else if(Game.playerScore >= 5 && Game.playerScore < 12) {
                
                if(Game.playerScore === 8) {
                    
                    if(Game.dealerScore === 5 || Game.dealerScore === 6) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                    
                } else if(Game.playerScore === 9) {
                    
                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                    
                } else if(Game.playerScore === 10) {
                    
                    if(Game.dealerScore === 10 || Game.dealerScore === 11) {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                    }
                    
                } else if(Game.playerScore === 11) {
                    
                    optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                
                } else {
                    
                    optimalDecision = "YOU SHOULD HIT.";
                }
                
            } else {
                
                if(Game.playerScore === 12) {
                    
                    if(Game.dealerScore >= 4 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD STAND.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                    
                } else {
                    
                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD STAND.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                }
            }
            
        } else {
            
            // Soft hands - Händer som räknar ess som 11.
            
            if(Game.playerScore >= 20) {
                
                optimalDecision = "YOU SHOULD STAND.";
                
            } else if(Game.playerScore >= 13 && Game.playerScore < 18) {
                
                if(Game.playerScore >= 13 && Game.playerScore < 17) {
                    
                    if(Game.dealerScore >= 4 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                    
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                
                } else {
                    
                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                    
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                }

            } else {
                
                if(Game.playerScore === 18) {
                    
                    if(Game.dealerScore === 9 || Game.dealerScore === 10) {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                        
                    } else {
                        
                        if(Game.dealerScore >= 3 && Game.dealerScore < 7) {
                            
                            optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE STAND.";
                            
                        } else {
                            
                            optimalDecision = "YOU SHOULD STAND.";
                        }
                    }
                
                } else {
                    
                    if(Game.dealerScore === 6) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE STAND.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD STAND.";
                    }
                }
            }
        }
        
        if(Game.playerScore === 21 && Game.playerCardCounter === 2 && Game.dealerScore !== 11 && Game.dealerScore !== 10) {
            
            Game.strategyTips.innerHTML = "";
            
        } else if(Game.playerScore <= 21) {
            
            Game.strategyTips.innerHTML = "";
            Game.strategyTips.style.webkitAnimation = 'none'; 
            
            // http://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
            
            setTimeout(function() {
                
                Game.strategyTips.innerHTML = optimalDecision;
                Game.strategyTips.style.webkitAnimation = '';
                
            },500);
        }
        
        else {
            
            Game.strategyTips.innerHTML = "";
        }
    },
};