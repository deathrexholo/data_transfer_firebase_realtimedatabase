import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";


//update your own config
const firebaseConfig = {
  apiKey: "",
  authDomain: "test-9025f.firebaseapp.com",
  projectId: "test-9025f",
  storageBucket: "test-9025f.firebasestorage.app",
  messagingSenderId: "1030195647961",
  appId: "1:1030195647961:web:d2d624e48c88809be835c8",
  databaseURl: "\/",
};

// Initialize Firebase
initializeApp(firebaseConfig);


//changes your data 

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: 'helll',
    email: 'ymo278@gmsil',
    profile_picture: 'shit'

  })
  .then(() => {
  console.log('Data written successfully!');
  })
  .catch((error) => {
    console.error('Error writing data:', error);    // to give the successsful message at the console
  });
}

export default writeUserData;
