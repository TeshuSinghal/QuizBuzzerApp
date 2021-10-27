import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAIgJRrlus5vqDSN567vujFdS1NwRoXtlQ",
    authDomain: "wireless-buzzer-1e388.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-1e388-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-1e388",
    storageBucket: "wireless-buzzer-1e388.appspot.com",
    messagingSenderId: "680759707314",
    appId: "1:680759707314:web:59bda8cc556d34f21e6bab"
}

// Initialize Firebase 
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.database()