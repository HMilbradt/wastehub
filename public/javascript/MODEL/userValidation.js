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

function checkState() {
        firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid);
        } else {
            window.location.replace("index.html");
        }
    });
}

function logout() {

    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
        window.location.replace("index.html");
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}
