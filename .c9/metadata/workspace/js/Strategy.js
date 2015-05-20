{"filter":false,"title":"Strategy.js","tooltip":"/js/Strategy.js","undoManager":{"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["\"use strict\";"],"id":1}],[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":2,"column":0},"end":{"row":179,"column":2},"action":"insert","lines":["var Strategy = {","    ","    calculate: function() {","        ","        // Uträkningar för bästa strategi i varje situation.","        ","        var optimalDecision = \"\";","        ","        if(Game.playerHasAce === 0) {","            ","            // Hard hands - Händer som inte innehåller ess eller som räknar ess som 1.","            ","            if(Game.playerScore >= 17) {","                ","                optimalDecision = \"YOU SHOULD STAND.\";","            ","            } else if(Game.playerScore >= 5 && Game.playerScore < 12) {","                ","                if(Game.playerScore === 8) {","                    ","                    if(Game.dealerScore === 5 || Game.dealerScore === 6) {","                        ","                        optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.\";","                        ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                    }","                    ","                } else if(Game.playerScore === 9) {","                    ","                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {","                        ","                        optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.\";","                        ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                    }","                    ","                } else if(Game.playerScore === 10) {","                    ","                    if(Game.dealerScore === 10 || Game.dealerScore === 11) {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                        ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.\";","                    }","                    ","                } else if(Game.playerScore === 11) {","                    ","                    optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.\";","                ","                } else {","                    ","                    optimalDecision = \"YOU SHOULD HIT.\";","                }","                ","            } else {","                ","                if(Game.playerScore === 12) {","                    ","                    if(Game.dealerScore >= 4 && Game.dealerScore < 7) {","                        ","                        optimalDecision = \"YOU SHOULD STAND.\";","                        ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                    }","                    ","                } else {","                    ","                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {","                        ","                        optimalDecision = \"YOU SHOULD STAND.\";","                        ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                    }","                }","            }","            ","        } else {","            ","            // Soft hands - Händer som räknar ess som 11.","            ","            if(Game.playerScore >= 20) {","                ","                optimalDecision = \"YOU SHOULD STAND.\";","                ","            } else if(Game.playerScore >= 13 && Game.playerScore < 18) {","                ","                if(Game.playerScore >= 13 && Game.playerScore < 17) {","                    ","                    if(Game.dealerScore >= 4 && Game.dealerScore < 7) {","                        ","                        optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.\";","                    ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                    }","                ","                } else {","                    ","                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {","                        ","                        optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.\";","                    ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                    }","                }","","            } else {","                ","                if(Game.playerScore === 18) {","                    ","                    if(Game.dealerScore === 9 || Game.dealerScore === 10) {","                        ","                        optimalDecision = \"YOU SHOULD HIT.\";","                        ","                    } else {","                        ","                        if(Game.dealerScore >= 3 && Game.dealerScore < 7) {","                            ","                            optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE STAND.\";","                            ","                        } else {","                            ","                            optimalDecision = \"YOU SHOULD STAND.\";","                        }","                    }","                ","                } else {","                    ","                    if(Game.dealerScore === 6) {","                        ","                        optimalDecision = \"YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE STAND.\";","                        ","                    } else {","                        ","                        optimalDecision = \"YOU SHOULD STAND.\";","                    }","                }","            }","        }","        ","        if(Game.playerScore === 21 && Game.playerCardCounter === 2 && Game.dealerScore !== 11 && Game.dealerScore !== 10) {","            ","            Game.strategyTips.innerHTML = \"\";","            ","        } else if(Game.playerScore <= 21) {","            ","            Game.strategyTips.innerHTML = \"\";","            Game.strategyTips.style.webkitAnimation = 'none'; ","            ","            // http://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element","            ","            setTimeout(function() {","                ","                Game.strategyTips.innerHTML = optimalDecision;","                Game.strategyTips.style.webkitAnimation = '';","                ","            },500);","        }","        ","        else {","            ","            Game.strategyTips.innerHTML = \"\";","        }","    },","};"],"id":4}]],"mark":3,"position":3},"ace":{"folds":[],"scrolltop":1824,"scrollleft":0,"selection":{"start":{"row":165,"column":12},"end":{"row":165,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":518,"mode":"ace/mode/javascript"}},"timestamp":1432102522939,"hash":"d6bba0504f6de25cc0e4b842d857edafdd470ce1"}