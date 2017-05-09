function writeData(food) {

    var database = firebase.database()

    firebase.auth().onAuthStateChanged(function (user) {

        database.ref('users/' + user.uid + '/waste/').push({

            item: food,
            date: firebase.database.ServerValue.TIMESTAMP
        })
    });
}