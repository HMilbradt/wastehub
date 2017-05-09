 function hideButton() {
 var hidden = false;
    function action() {
        hidden = !hidden;
        if(hidden) {
            document.getElementById('fruitButton').style.visibility = 'hidden';
        } else {
            document.getElementById('fruitButton').style.visibility = 'visible';
        }
    }
}