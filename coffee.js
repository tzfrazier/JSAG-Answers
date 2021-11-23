const btns = document.getElementsByClassName("menuItem");
var cBtn = btns.item(0);
var hBtn = btns.item(1);
var iBtn = btns.item(2);

function hideitall() {
    if (document.querySelector('.menuDSP') != null ) {
      document.querySelector('.menuDSP').setAttribute("class", "menuCtr");
    };
  };

cBtn.onclick = function(){
        hideitall();
        document.getElementById('coffeeMenuCtr').setAttribute("class", "menuDSP");
      };
hBtn.onclick = function(){
              hideitall();
              document.getElementById('hotMenuCtr').setAttribute("class", "menuDSP");
            };
iBtn.onclick = function(){
        hideitall();
        document.getElementById('coldMenuCtr').setAttribute("class", "menuDSP");
                  };
