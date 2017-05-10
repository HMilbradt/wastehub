/* Open when someone clicks on the span element */
function openNav() {

	var fruitbtn = document.getElementById("frbtn");
	var veggiebtn = document.getElementById("vegbtn");

	fruitbtn.style.display="block";    
    veggiebtn.style.display="block";   

    var fruits = document.getElementsByClassName('fruit');
    var veggies = document.getElementsByClassName('veggie');

    for(var i = 0; i != fruits.length; i++) {  
        fruits[i].style.display= "none";
    }

    for(var i = 0; i != veggies.length; i++) {  
        veggies[i].style.display= "none";
    }



    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";


}
