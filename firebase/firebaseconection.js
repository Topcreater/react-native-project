import * as firbase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCwSNbUujYVYc12Du5-y_E5CA1RPO4SxAY",
    authDomain: "crud-app-7bc30.firebaseapp.com",
    databaseURL: "https://crud-app-7bc30-default-rtdb.firebaseio.com",
    projectId: "crud-app-7bc30",
    storageBucket: "crud-app-7bc30.appspot.com",
    messagingSenderId: "554027093815",
    appId: "1:554027093815:web:ab4902b12d06005d3554b2",
    measurementId: "G-91Y1M2VQ2H"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export default firbase;