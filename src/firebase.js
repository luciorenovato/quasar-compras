import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyCVb2H1AEfXzDRii0L12Gh7YeLzlAfXYPQ',
  authDomain: 'fir-vue-45ea5.firebaseapp.com',
  databaseURL: 'https://fir-vue-45ea5.firebaseio.com',
  projectId: 'fir-vue-45ea5',
  storageBucket: 'fir-vue-45ea5.appspot.com',
  messagingSenderId: '64758996992',
  appId: '1:64758996992:web:1e667653e45588c9'
}
let app = Firebase.initializeApp(config)
export const db = app.database()
export const namesRef = db.ref('names')
