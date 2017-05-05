/* Open when someone clicks on the span element */
function openNav() {
	var fruitbtn = document.getElementById("frbtn");
    var hiddenStuff = document.getElementsByClassName('fruit');
    for(var i = 0; i != hiddenStuff.length; i++) {  
        hiddenStuff[i].style.display= "none";
        fruitbtn.style.display="block";           
    }
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";


}
