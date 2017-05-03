// Set the configuration for your app
var config = {
    apiKey: "AIzaSyC_wXoWjrnmKK_DNGU0Q_h2LAR2HYAQZA8",
    authDomain: "wastehub-55a96.firebaseapp.com",
    databaseURL: "https://wastehub-55a96.firebaseio.com/",
    storageBucket: "wastehub-55a96.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();