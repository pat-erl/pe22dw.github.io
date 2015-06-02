{"filter":false,"title":"Card.js","tooltip":"/js/Card.js","undoManager":{"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["\"use strict\";"],"id":1}],[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":2,"column":0},"end":{"row":174,"column":2},"action":"insert","lines":["// Funktioner för visning av kort med canvas.","// Spelkort från http://www.jfitz.com/cards/","","var Card = {","    ","    displayPlayerCard: function(card) {","        ","         var canvas = document.getElementById(\"playercards\");","         var context = canvas.getContext('2d');","","        if (Game.playerCardCounter === 1) {","            ","            var image1p = new Image();","            image1p.src = \"../pics/cards/\"+ card + \".png\";","            image1p.onload = function() {","            ","            context.drawImage(image1p, 95, 0, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 2) {","            ","            var image2p = new Image();","            image2p.src = \"../pics/cards/\"+ card + \".png\";","            image2p.onload = function() {","            ","            context.drawImage(image2p, 110, 6, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 3) {","            ","            var image3p = new Image();","            image3p.src = \"../pics/cards/\"+ card + \".png\";","            image3p.onload = function() {","            ","            context.drawImage(image3p, 125, 4, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 4) {","            ","            var image4p = new Image();","            image4p.src = \"../pics/cards/\"+ card + \".png\";","            image4p.onload = function() {","            ","            context.drawImage(image4p, 140, 2, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 5) {","            ","            var image5p = new Image();","            image5p.src = \"../pics/cards/\"+ card + \".png\";","            image5p.onload = function() {","            ","            context.drawImage(image5p, 155, 0, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 6) {","            ","            var image6p = new Image();","            image6p.src = \"../pics/cards/\"+ card + \".png\";","            image6p.onload = function() {","            ","            context.drawImage(image6p, 170, 0, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 7) {","            ","            var image7p = new Image();","            image7p.src = \"../pics/cards/\"+ card + \".png\";","            image7p.onload = function() {","            ","            context.drawImage(image7p, 185, 0, 64, 86);","            };","            ","        } else if (Game.playerCardCounter === 8) {","            ","            var image8p = new Image();","            image8p.src = \"../pics/cards/\"+ card + \".png\";","            image8p.onload = function() {","            ","            context.drawImage(image8p, 200, 0, 64, 86);","            };","        }","        ","        Sound.cardStart();","        ","        Game.playerScore = Game.playerScore + Score.recalculate(Deck.currentCard);","        Score.displayPlayerScore();","    },","    ","    displayDealerCard: function(card) {","        ","        var canvas2 = document.getElementById(\"dealercards\");","        var context2 = canvas2.getContext('2d');","","        if (Game.dealerCardCounter === 1) {","            ","            var image1d = new Image();","            image1d.src = \"../pics/cards/\"+ card + \".png\";","            image1d.onload = function() {","            ","            context2.drawImage(image1d, 95, 0, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 2) {","            ","            var image2d = new Image();","            image2d.src = \"../pics/cards/\"+ card + \".png\";","            image2d.onload = function() {","            ","            context2.drawImage(image2d, 110, 6, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 3) {","            ","            var image3d = new Image();","            image3d.src = \"../pics/cards/\"+ card + \".png\";","            image3d.onload = function() {","            ","            context2.drawImage(image3d, 125, 4, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 4) {","            ","            var image4d = new Image();","            image4d.src = \"../pics/cards/\"+ card + \".png\";","            image4d.onload = function() {","            ","            context2.drawImage(image4d, 140, 2, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 5) {","            ","            var image5d = new Image();","            image5d.src = \"../pics/cards/\"+ card + \".png\";","            image5d.onload = function() {","            ","            context2.drawImage(image5d, 155, 0, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 6) {","            ","            var image6d = new Image();","            image6d.src = \"../pics/cards/\"+ card + \".png\";","            image6d.onload = function() {","            ","            context2.drawImage(image6d, 170, 0, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 7) {","            ","            var image7d = new Image();","            image7d.src = \"../pics/cards/\"+ card + \".png\";","            image7d.onload = function() {","            ","            context2.drawImage(image7d, 185, 0, 64, 86);","            };","            ","        } else if (Game.dealerCardCounter === 8) {","            ","            var image8d = new Image();","            image8d.src = \"../pics/cards/\"+ card + \".png\";","            image8d.onload = function() {","            ","            context2.drawImage(image8d, 200, 0, 64, 86);","            };","        }","        ","        Sound.cardStart();","        ","        Game.dealerScore = Game.dealerScore + Score.recalculate(Deck.currentCard);  ","        Score.displayDealerScore();","    },","};"],"id":4}],[{"start":{"row":94,"column":48},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":95,"column":0},"end":{"row":95,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":95,"column":8},"end":{"row":95,"column":36},"action":"insert","lines":["context.translate(0.5, 0.5);"],"id":6}],[{"start":{"row":95,"column":15},"end":{"row":95,"column":16},"action":"insert","lines":["2"],"id":7}],[{"start":{"row":10,"column":47},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":11,"column":0},"end":{"row":11,"column":9},"action":"insert","lines":["         "]}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":37},"action":"insert","lines":["context.translate(0.5, 0.5);"],"id":9}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":37},"action":"remove","lines":["         context.translate(0.5, 0.5);"],"id":10}],[{"start":{"row":10,"column":47},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":11}],[{"start":{"row":95,"column":0},"end":{"row":95,"column":37},"action":"remove","lines":["        context2.translate(0.5, 0.5);"],"id":12}],[{"start":{"row":94,"column":48},"end":{"row":95,"column":0},"action":"remove","lines":["",""],"id":13}]],"mark":12,"position":12},"ace":{"folds":[],"scrolltop":41,"scrollleft":0,"selection":{"start":{"row":94,"column":48},"end":{"row":94,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":42,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1432877073776,"hash":"26d007e296a3b30476f37de88ea0cea80f6e1575"}