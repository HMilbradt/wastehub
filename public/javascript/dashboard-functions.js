function testuser() {

    var user1;
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            user1 = user;
            console.log("user logged in")
            console.log("checkpoint")
            console.log(user.uid) // this prints fine

            var num;
            firebase.database().ref('users/' + user.uid).once('value').then(function (snapshot) {
                num = snapshot.numChildren()
                console.log(num);
            });

            console.log(user1.uid)

        } else {
            console.log("user not logged in")
        }
    });
}

function writeData(food) {

    var database = firebase.database()

    firebase.auth().onAuthStateChanged(function (user) {

        database.ref('users/' + user.uid + '/waste/').push({

            item: food,
            date: firebase.database.ServerValue.TIMESTAMP
        })
    })

}