import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import firebase from "firebase/app"
import "firebase/analytics"
import App from "./App"

const firebaseConfig = {
  apiKey: "AIzaSyCev7G4HPURCMS4EYG0PGryqGgijOKlm7w",
  authDomain: "course-o-rater.firebaseapp.com",
  projectId: "course-o-rater",
  storageBucket: "course-o-rater.appspot.com",
  messagingSenderId: "713909971040",
  appId: "1:713909971040:web:6f6fd3cc74d6ccb16ebb05",
  measurementId: "G-7QTMH3BT7Z",
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
