function checkState() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid);
        } else {
            window.location.replace("index.html");
        }
    });
}

function testuser() {

    var user1;
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            user1 = user;
            console.log("user logged in");
            console.log("checkpoint");
            console.log(user.uid); // this prints fine

            var num;
            firebase.database().ref('users/' + user.uid).once('value').then(function (snapshot) {
                num = snapshot.numChildren();
                console.log(num);
            });


            console.log(user1.uid);

        } else {
            console.log("user not logged in");
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
