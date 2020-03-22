// import * as Firebase from 'firebase/app'
// import 'firebase/firestore'
//
// const config = {
//   apiKey: 'AIzaSyC4VR1pEyB-TPj3Da0U4Y4lKixH8GUcP_M',
//   authDomain: 'top-on-line.firebaseapp.com',
//   databaseURL: 'https://top-on-line.firebaseio.com',
//   projectId: 'top-on-line',
//   storageBucket: 'top-on-line.appspot.com',
//   messagingSenderId: '510470734440',
//   appId: '1:510470734440:web:7d8e6e335c3ffaebdb31dd'
// }
//
// function initFirebase () {
//   Firebase.initializeApp(config)
//   return new Promise((resolve, reject) => {
//     Firebase.firestore().enablePersistence()
//       .then(resolve)
//       .catch(err => {
//         if (err.code === 'failed-precondition') {
//           reject(err)
//           // Multiple tabs open, persistence can only be
//           // enabled in one tab at a a time.
//         } else if (err.code === 'unimplemented') {
//           reject(err)
//           // The current browser does not support all of
//           // the features required to enable persistence
//         }
//       })
//   })
// }
//
// export { Firebase, initFirebase }
