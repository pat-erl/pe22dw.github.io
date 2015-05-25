{"filter":false,"title":"GameProgress.js","tooltip":"/js/GameProgress.js","undoManager":{"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["\"use strict\";"],"id":1}],[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":2,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["// Funktioner för att spara och hämta antalet marker i local storage.","","var GameProgress = {","    ","    save: function() {","        ","        localStorage.setItem('playerchips', Game.playerChips);","        ","        var saved = \"SAVED!\";","        Messages.textColor = \"chartreuse\";","        Messages.displayMessage(saved);","    },","    ","    load: function() {","        ","        Game.playerChips = localStorage.getItem('playerchips');","    },","};"],"id":4}],[{"start":{"row":10,"column":0},"end":{"row":12,"column":39},"action":"remove","lines":["        var saved = \"SAVED!\";","        Messages.textColor = \"chartreuse\";","        Messages.displayMessage(saved);"],"id":5}],[{"start":{"row":9,"column":8},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":6}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"remove","lines":["    "],"id":7}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":8}],[{"start":{"row":8,"column":62},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":9}],[{"start":{"row":14,"column":6},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":15,"column":4},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["r"],"id":12}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["e"],"id":13}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["m"],"id":14}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["o"],"id":15}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["v"],"id":16}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["e"],"id":17}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"remove","lines":["e"],"id":18}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"remove","lines":["v"],"id":19}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"remove","lines":["o"],"id":20}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"remove","lines":["m"],"id":21}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"remove","lines":["e"],"id":22}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["r"],"id":23}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["c"],"id":24}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["l"],"id":25}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["e"],"id":26}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["a"],"id":27}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["r"],"id":28}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":[":"],"id":29}],[{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"insert","lines":[" "],"id":30}],[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["f"],"id":31}],[{"start":{"row":16,"column":12},"end":{"row":16,"column":13},"action":"insert","lines":["u"],"id":32}],[{"start":{"row":16,"column":13},"end":{"row":16,"column":14},"action":"insert","lines":["n"],"id":33}],[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":["c"],"id":34}],[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["t"],"id":35}],[{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":["i"],"id":36}],[{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":["o"],"id":37}],[{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["n"],"id":38}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":21},"action":"insert","lines":["()"],"id":39}],[{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":[" "],"id":40}],[{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["{"],"id":41}],[{"start":{"row":16,"column":23},"end":{"row":18,"column":5},"action":"insert","lines":["","        ","    }"],"id":42}],[{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":[","],"id":43}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":8},"action":"insert","lines":["  "],"id":44}],[{"start":{"row":17,"column":8},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":18,"column":0},"end":{"row":18,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":18,"column":8},"end":{"row":18,"column":36},"action":"insert","lines":["localStorage.removeItem(key)"],"id":46}],[{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"remove","lines":["y"],"id":47}],[{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"remove","lines":["e"],"id":48}],[{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"remove","lines":["k"],"id":49}],[{"start":{"row":18,"column":32},"end":{"row":18,"column":34},"action":"insert","lines":["\"\""],"id":50}],[{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"insert","lines":["p"],"id":51}],[{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"insert","lines":["l"],"id":52}],[{"start":{"row":18,"column":35},"end":{"row":18,"column":36},"action":"insert","lines":["a"],"id":53}],[{"start":{"row":18,"column":36},"end":{"row":18,"column":37},"action":"insert","lines":["y"],"id":54}],[{"start":{"row":18,"column":37},"end":{"row":18,"column":38},"action":"insert","lines":["e"],"id":55}],[{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"insert","lines":["r"],"id":56}],[{"start":{"row":18,"column":39},"end":{"row":18,"column":40},"action":"insert","lines":["c"],"id":57}],[{"start":{"row":18,"column":40},"end":{"row":18,"column":41},"action":"insert","lines":["h"],"id":58}],[{"start":{"row":18,"column":41},"end":{"row":18,"column":42},"action":"insert","lines":["i"],"id":59}],[{"start":{"row":18,"column":42},"end":{"row":18,"column":43},"action":"insert","lines":["p"],"id":60}],[{"start":{"row":18,"column":43},"end":{"row":18,"column":44},"action":"insert","lines":["s"],"id":61}],[{"start":{"row":18,"column":46},"end":{"row":18,"column":47},"action":"insert","lines":[";"],"id":62}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"remove","lines":["r"],"id":63}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"remove","lines":["a"],"id":64}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"remove","lines":["e"],"id":65}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"remove","lines":["l"],"id":66}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["c"],"id":67}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["r"],"id":68}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["e"],"id":69}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["m"],"id":70}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["o"],"id":71}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["v"],"id":72}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["e"],"id":73}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"remove","lines":["e"],"id":74}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"remove","lines":["v"],"id":75}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"remove","lines":["o"],"id":76}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"remove","lines":["m"],"id":77}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"remove","lines":["e"],"id":78}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["r"],"id":79}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["d"],"id":80}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["e"],"id":81}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["l"],"id":82}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["e"],"id":83}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["t"],"id":84}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["e"],"id":85}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"remove","lines":["e"],"id":86}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"remove","lines":["t"],"id":87}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"remove","lines":["e"],"id":88}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"remove","lines":["l"],"id":89}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"remove","lines":["e"],"id":90}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["d"],"id":91}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["e"],"id":92}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["r"],"id":93}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["a"],"id":94}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["e"],"id":95}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"remove","lines":["e"],"id":96}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["s"],"id":97}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["e"],"id":98}]],"mark":97,"position":97},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":9},"end":{"row":16,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1432529569934,"hash":"f79a83d556ed984b13b0b75c1939e2a59458eeff"}