  function hide() {
    var fruitbtn = document.getElementById("frbtn");
    var hiddenStuff = document.getElementsByClassName('fruit');
    var resetOverlay = document.getElementsByClassName('closebtn');

    for(var i = 0; i != hiddenStuff.length; i++) {
          if(fruitbtn.click) {
              hiddenStuff[i].style.display= "block";
              fruitbtn.style.display="none";
            }
        }
    }

function returnPage() {
    var fruitbtn = document.getElementById("frbtn");
    var hiddenStuff = document.getElementsByClassName('fruit');
    var resetOverlay = document.getElementsByClassName('closebtn');

    for(var i = 0; i != hiddenStuff.length; i++) {
          if(fruitbtn.click) {
              hiddenStuff[i].style.display= "none";
              fruitbtn.style.display="block";
            }
        }
    }
        