import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0keaddlDhSFAxBQAt-AJrlt3wCRN4T3Q",
  authDomain: "whatsapp-react-a86cb.firebaseapp.com",
  databaseURL: "https://whatsapp-react-a86cb.firebaseio.com",
  projectId: "whatsapp-react-a86cb",
  storageBucket: "whatsapp-react-a86cb.appspot.com",
  messagingSenderId: "536642898100",
  appId: "1:536642898100:web:e658a59faf5f400f4defe1",
  measurementId: "G-J9SQFGE1L7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // for db
const auth = firebase.auth(); // for firebase authentication
const provider = new firebase.auth.GoogleAuthProvider(); // for google authentication

export { auth, provider };
export default db;
//https://<databaseName>.firebaseio.com
