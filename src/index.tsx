import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FirebaseAppProvider } from "reactfire"
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

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>{" "}
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
