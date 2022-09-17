import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
@@ -10,4 +11,6 @@ const firebaseConfig = {
  appId: process.env.REACT_APP_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();