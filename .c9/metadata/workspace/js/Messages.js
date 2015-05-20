{"filter":false,"title":"Messages.js","tooltip":"/js/Messages.js","undoManager":{"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["\"use strict\";"],"id":1}],[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":2,"column":0},"end":{"row":100,"column":2},"action":"insert","lines":["// Funktioner för utskrift av meddelanden.","","var Messages = {","    ","    textColor: \"\",","    textColorP: \"\",","    textColorD: \"\",","    ","    displayMessage: function(message) {","        ","        Game.tinyMessage.style.color = Messages.textColor;","        Game.tinyMessage.innerHTML = message;","        ","        setTimeout(function(){","            ","            Game.tinyMessage.innerHTML = \"\";","            ","        },1000);","    },","    ","    displayMessageP: function(message) {","        ","        var canvas7 = document.getElementById(\"playercards\");","        var context7 = canvas7.getContext('2d');","        ","        setTimeout(function(){","            ","            if(Game.playerHasDoubled === true && Game.playerScore !== Game.dealerScore) {","            ","                Sound.doublewinStart();","            ","            } else {","                ","                if(Game.playerScore === 21 && Game.playerCardCounter === 2 && Game.playerScore !== Game.dealerScore) {","                    ","                    Sound.blackjackStart();","                    ","                } else if(Game.playerScore === Game.dealerScore) {","                    ","                    Sound.tieStart();","                    ","                } else {","                    ","                    Sound.winStart(); ","                }","            }","            ","            context7.fillStyle = \"black\";","            context7.fillRect(88, 20, 92, 30);","            context7.font = \"bold 24px Futura, 'Trebuchet MS', Arial, sans-serif\";","            context7.fillStyle = Messages.textColorP;","            context7.fillText(message, 106, 44);","                    ","        },500); ","    },","    ","    displayMessageD: function(message) {","        ","        var canvas8 = document.getElementById(\"dealercards\");","        var context8 = canvas8.getContext('2d');","        ","        setTimeout(function(){","            ","            if(Game.playerScore < Game.dealerScore || Game.playerScore > 21) {","                ","                Sound.loseStart();","            }","            ","            context8.fillStyle = \"black\";","            context8.fillRect(88, 20, 92, 30);","            context8.font = \"bold 24px Futura, 'Trebuchet MS', Arial, sans-serif\";","            context8.fillStyle = Messages.textColorD;","            context8.fillText(message, 106, 44);","                    ","        },500); ","    },","    ","    displayMessageOther: function(message) {","        ","        var canvas9 = document.getElementById(\"dealercards\");","        var context9 = canvas9.getContext('2d');","        ","        setTimeout(function() {","            ","            context9.fillStyle = \"#1b2c3f\";","            context9.fillRect(0, 30, 80, 20);","            context9.font = \"bold 9px Verdana\";","            context9.fillStyle = \"white\";","            context9.fillText(message, 0, 44);","        ","        },500);","    ","        setTimeout(function(){","            ","            context9.clearRect(0, 30, 80, 20);","            ","        },1500); ","    },","};"],"id":4}],[{"start":{"row":31,"column":39},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":32,"column":0},"end":{"row":32,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["S"],"id":6}],[{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["o"],"id":7}],[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["u"],"id":8}],[{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["n"],"id":9}],[{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["d"],"id":10}],[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["."],"id":11}],[{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["c"],"id":12}],[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["a"],"id":13}],[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["s"],"id":14}],[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["h"],"id":15}],[{"start":{"row":32,"column":22},"end":{"row":32,"column":26},"action":"remove","lines":["cash"],"id":16},{"start":{"row":32,"column":22},"end":{"row":32,"column":34},"action":"insert","lines":["cashingStart"]}],[{"start":{"row":32,"column":34},"end":{"row":32,"column":36},"action":"insert","lines":["()"],"id":17}],[{"start":{"row":32,"column":36},"end":{"row":32,"column":37},"action":"insert","lines":[";"],"id":18}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":37},"action":"remove","lines":["                Sound.cashingStart();"],"id":19}],[{"start":{"row":31,"column":39},"end":{"row":32,"column":0},"action":"remove","lines":["",""],"id":20}],[{"start":{"row":65,"column":50},"end":{"row":65,"column":51},"action":"insert","lines":[" "],"id":21}],[{"start":{"row":65,"column":51},"end":{"row":65,"column":52},"action":"insert","lines":["&"],"id":22}],[{"start":{"row":65,"column":52},"end":{"row":65,"column":53},"action":"insert","lines":["&"],"id":23}],[{"start":{"row":65,"column":53},"end":{"row":65,"column":54},"action":"insert","lines":["&"],"id":24}],[{"start":{"row":65,"column":53},"end":{"row":65,"column":54},"action":"remove","lines":["&"],"id":25}],[{"start":{"row":65,"column":53},"end":{"row":65,"column":54},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":65,"column":54},"end":{"row":65,"column":55},"action":"insert","lines":["G"],"id":27}],[{"start":{"row":65,"column":55},"end":{"row":65,"column":56},"action":"insert","lines":["a"],"id":28}],[{"start":{"row":65,"column":56},"end":{"row":65,"column":57},"action":"insert","lines":["m"],"id":29}],[{"start":{"row":65,"column":57},"end":{"row":65,"column":58},"action":"insert","lines":["e"],"id":30}],[{"start":{"row":65,"column":58},"end":{"row":65,"column":59},"action":"insert","lines":["."],"id":31}],[{"start":{"row":65,"column":59},"end":{"row":65,"column":60},"action":"insert","lines":["d"],"id":32}],[{"start":{"row":65,"column":60},"end":{"row":65,"column":61},"action":"insert","lines":["e"],"id":33}],[{"start":{"row":65,"column":61},"end":{"row":65,"column":62},"action":"insert","lines":["a"],"id":34}],[{"start":{"row":65,"column":62},"end":{"row":65,"column":63},"action":"insert","lines":["l"],"id":35}],[{"start":{"row":65,"column":63},"end":{"row":65,"column":64},"action":"insert","lines":["e"],"id":36}],[{"start":{"row":65,"column":64},"end":{"row":65,"column":65},"action":"insert","lines":["r"],"id":37}],[{"start":{"row":65,"column":59},"end":{"row":65,"column":65},"action":"remove","lines":["dealer"],"id":38},{"start":{"row":65,"column":59},"end":{"row":65,"column":70},"action":"insert","lines":["dealerScore"]}],[{"start":{"row":65,"column":70},"end":{"row":65,"column":71},"action":"insert","lines":[" "],"id":39}],[{"start":{"row":65,"column":71},"end":{"row":65,"column":72},"action":"insert","lines":["<"],"id":40}],[{"start":{"row":65,"column":72},"end":{"row":65,"column":73},"action":"insert","lines":[" "],"id":41}],[{"start":{"row":65,"column":73},"end":{"row":65,"column":74},"action":"insert","lines":["2"],"id":42}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"insert","lines":["1"],"id":43}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"remove","lines":["1"],"id":44}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"insert","lines":["2"],"id":45}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"remove","lines":["2"],"id":46}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"insert","lines":["1"],"id":47}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"remove","lines":["1"],"id":48}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"insert","lines":["2"],"id":49}],[{"start":{"row":65,"column":75},"end":{"row":65,"column":76},"action":"remove","lines":[" "],"id":50}],[{"start":{"row":65,"column":74},"end":{"row":65,"column":75},"action":"remove","lines":["2"],"id":51}],[{"start":{"row":65,"column":73},"end":{"row":65,"column":74},"action":"remove","lines":["2"],"id":52}],[{"start":{"row":65,"column":72},"end":{"row":65,"column":73},"action":"remove","lines":[" "],"id":53}],[{"start":{"row":65,"column":71},"end":{"row":65,"column":72},"action":"remove","lines":["<"],"id":54}],[{"start":{"row":65,"column":70},"end":{"row":65,"column":71},"action":"remove","lines":[" "],"id":55}],[{"start":{"row":65,"column":69},"end":{"row":65,"column":70},"action":"remove","lines":["e"],"id":56}],[{"start":{"row":65,"column":68},"end":{"row":65,"column":69},"action":"remove","lines":["r"],"id":57}],[{"start":{"row":65,"column":67},"end":{"row":65,"column":68},"action":"remove","lines":["o"],"id":58}],[{"start":{"row":65,"column":66},"end":{"row":65,"column":67},"action":"remove","lines":["c"],"id":59}],[{"start":{"row":65,"column":65},"end":{"row":65,"column":66},"action":"remove","lines":["S"],"id":60}],[{"start":{"row":65,"column":64},"end":{"row":65,"column":65},"action":"remove","lines":["r"],"id":61}],[{"start":{"row":65,"column":63},"end":{"row":65,"column":64},"action":"remove","lines":["e"],"id":62}],[{"start":{"row":65,"column":62},"end":{"row":65,"column":63},"action":"remove","lines":["l"],"id":63}],[{"start":{"row":65,"column":61},"end":{"row":65,"column":62},"action":"remove","lines":["a"],"id":64}],[{"start":{"row":65,"column":60},"end":{"row":65,"column":61},"action":"remove","lines":["e"],"id":65}],[{"start":{"row":65,"column":59},"end":{"row":65,"column":60},"action":"remove","lines":["d"],"id":66}],[{"start":{"row":65,"column":58},"end":{"row":65,"column":59},"action":"remove","lines":["."],"id":67}],[{"start":{"row":65,"column":57},"end":{"row":65,"column":58},"action":"remove","lines":["e"],"id":68}],[{"start":{"row":65,"column":56},"end":{"row":65,"column":57},"action":"remove","lines":["m"],"id":69}],[{"start":{"row":65,"column":55},"end":{"row":65,"column":56},"action":"remove","lines":["a"],"id":70}],[{"start":{"row":65,"column":54},"end":{"row":65,"column":55},"action":"remove","lines":["G"],"id":71}],[{"start":{"row":65,"column":53},"end":{"row":65,"column":54},"action":"remove","lines":[" "],"id":72}],[{"start":{"row":65,"column":52},"end":{"row":65,"column":53},"action":"remove","lines":["&"],"id":73}],[{"start":{"row":65,"column":51},"end":{"row":65,"column":52},"action":"remove","lines":["&"],"id":74}],[{"start":{"row":65,"column":15},"end":{"row":65,"column":75},"action":"remove","lines":["Game.playerScore < Game.dealerScore || Game.playerScore > 21"],"id":75},{"start":{"row":65,"column":15},"end":{"row":65,"column":16},"action":"insert","lines":["m"]}],[{"start":{"row":65,"column":16},"end":{"row":65,"column":17},"action":"insert","lines":["e"],"id":76}],[{"start":{"row":65,"column":17},"end":{"row":65,"column":18},"action":"insert","lines":["s"],"id":77}],[{"start":{"row":65,"column":18},"end":{"row":65,"column":19},"action":"insert","lines":["s"],"id":78}],[{"start":{"row":65,"column":19},"end":{"row":65,"column":20},"action":"insert","lines":["a"],"id":79}],[{"start":{"row":65,"column":20},"end":{"row":65,"column":21},"action":"insert","lines":["g"],"id":80}],[{"start":{"row":65,"column":21},"end":{"row":65,"column":22},"action":"insert","lines":["e"],"id":81}],[{"start":{"row":65,"column":22},"end":{"row":65,"column":23},"action":"insert","lines":[" "],"id":82}],[{"start":{"row":65,"column":23},"end":{"row":65,"column":24},"action":"insert","lines":["="],"id":83}],[{"start":{"row":65,"column":24},"end":{"row":65,"column":25},"action":"insert","lines":["="],"id":84}],[{"start":{"row":65,"column":25},"end":{"row":65,"column":26},"action":"insert","lines":["="],"id":85}],[{"start":{"row":65,"column":26},"end":{"row":65,"column":27},"action":"insert","lines":[" "],"id":86}],[{"start":{"row":65,"column":27},"end":{"row":65,"column":29},"action":"insert","lines":["\"\""],"id":87}],[{"start":{"row":65,"column":28},"end":{"row":65,"column":29},"action":"insert","lines":["W"],"id":88}],[{"start":{"row":65,"column":29},"end":{"row":65,"column":30},"action":"insert","lines":["I"],"id":89}],[{"start":{"row":65,"column":30},"end":{"row":65,"column":31},"action":"insert","lines":["N"],"id":90}],[{"start":{"row":65,"column":31},"end":{"row":65,"column":32},"action":"insert","lines":["S"],"id":91}]],"mark":90,"position":90},"ace":{"folds":[],"scrolltop":20,"scrollleft":0,"selection":{"start":{"row":57,"column":4},"end":{"row":57,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1432102519312,"hash":"f041d2801a0b727c86c2d61bfcd0ab98db737864"}