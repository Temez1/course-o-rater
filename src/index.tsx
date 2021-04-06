import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FirebaseAppProvider } from "reactfire"
import App from "./App"

const firebaseConfig = {
  apiKey: "AIzaSyCfbjMFJA3VEw-Q2rHmDPGpGSFQ4V4oEvQ",
  authDomain: "tuni-course-o-rater.firebaseapp.com",
  projectId: "tuni-course-o-rater",
  storageBucket: "tuni-course-o-rater.appspot.com",
  messagingSenderId: "452063471706",
  appId: "1:452063471706:web:a67f46598689aef3895063",
  measurementId: "G-FLJW594XT0",
}

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
