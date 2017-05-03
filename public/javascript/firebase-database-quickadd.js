function quickadd() {
    

    var database = firebase.database();
    var user = firebase.auth().currentUser;

    return firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
        var username = snapshot.val().username;
        console.log(username);
    });
}