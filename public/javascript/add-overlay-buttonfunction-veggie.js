
function hideVeg() {
    var fruitbtn = document.getElementById("vegbtn");
    var hiddenStuff = document.getElementsByClassName('veggie');

    for(var i = 0; i != hiddenStuff.length; i++) {
          if(fruitbtn.click) {
              hiddenStuff[i].style.display= "block";
              fruitbtn.style.display="none";
            }
        }
    }

function returnPage() {
    var fruitbtn = document.getElementById("vegbtn");
    var hiddenStuff = document.getElementsByClassName('veggie');

    for(var i = 0; i != hiddenStuff.length; i++) {
          if(fruitbtn.click) {
              hiddenStuff[i].style.display= "none";
              fruitbtn.style.display="block";
            }
        }
    }

