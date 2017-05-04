'use strict'

function dashboardRedirect() {

    // Redirect user if already logged in
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.replace("dashboard.html");
        } else {
            console.log('User not logged in');
        }
    });
}
