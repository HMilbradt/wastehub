'use strict';

/**
 * Writes a waste entry to the associated database.
 *
 * @param category The type of food
 * @param name The name of the food
 */
function writeWasteItem(category, name) {


    firebase.auth().onAuthStateChanged(function (user) {

        var database = firebase.database();

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var dateAdded = year + '/' + month + '/' + day;

        database.ref('users/' + user.uid + '/waste/' + category + '/').push({

            name: name,
            date: dateAdded
        })
    });
}

/**
 * Returns a snapshot for a particular category of food.
 *
 * @param category The type of food.
 */
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