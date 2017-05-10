'use strict';

/**
 * Writes a waste entry to the associated database.
 *
 * @param category The type of food
 * @param name The name of the food
 */
function increaseWasteCount(name) {


    firebase.auth().onAuthStateChanged(function (user) {


            var database = firebase.database();

            var itemRef = database.ref('users/' + user.uid + '/waste/count/').child(name);

            itemRef.transaction(function(count) {
                return (count || 0) + 1;
            });
            readWasteCount(name);
    });
}

function readWasteCount(name) {

    return new Promise(function(resolve, reject) {

        firebase.auth().onAuthStateChanged(function (user) {

            var count = firebase.database().ref("users/" + user.uid + "/waste/count/" + name);

        count.once("value", function(data) {
            if (data.val() === null) {
                resolve(0);
            } else {
                resolve(data.val());
            }
        });
    })
    });
}


// NOT WORKING AS INTENDED


/*
function increaseCount(name) {

    firebase.auth().onAuthStateChanged(function (user) {

        var database = firebase.database();

        var countRef = database.ref('users/' + user.uid + '/waste/count/').child(name);

        countRef.transaction(function(count) {
            return (count || 0) + 1;
        });
        console.log(countRef)
    });
}


function readCategory(category) {

    firebase.auth().onAuthStateChanged(function (user) {
        var count = 0;
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/users/' + userId + '/waste/' + category + '/').once('value').then(function(snapshot) {
            snapshot.forEach(function(data) {
                if (data.val().name === 'apple') {
                    count++;
                }
            });
            console.log(count);
        });
    });
}

function readFoodItem(category, name) {

    firebase.auth().onAuthStateChanged(function (user) {
        var count = 0;
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId + '/waste/' + category + '/').once('value').then(function(snapshot) {
            snapshot.forEach(function(data) {
                if (data.val().name === name) {
                    count++;
                }
            });

        });
        return count;
    });
}
    */