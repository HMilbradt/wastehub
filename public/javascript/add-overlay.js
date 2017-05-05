/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	var fruitbtn = document.getElementById("frbtn");
    var hiddenStuff = document.getElementsByClassName('fruit');
    var resetOverlay = document.getElementsByClassName('closebtn');

	fruitbtn.style.display="block";
    for(var i = 0; i != hiddenStuff.length; i++) {          
        hiddenStuff[i].style.display= "none";
    }
    
}
