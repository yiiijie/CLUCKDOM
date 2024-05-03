// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth' // 驗證功能
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAOaG3cTY-wy0gI5WCCz7cQe8YFUjagJ1Y',
    authDomain: 'cluckdom-2c78f.firebaseapp.com',
    projectId: 'cluckdom-2c78f',
    storageBucket: 'cluckdom-2c78f.appspot.com',
    messagingSenderId: '236388288879',
    appId: '1:236388288879:web:ab9d4c8feef276c0dcc09a',
    measurementId: 'G-L6Z4BGD1BH',
}

// 啟用firebase主程式
export const firebaseApp = initializeApp(firebaseConfig)
// 啟用驗證功能
export const auth = getAuth(firebaseApp)
