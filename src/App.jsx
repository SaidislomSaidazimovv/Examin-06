import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import UnAuth from "./UnAuth";

function App() {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || false
  );
  const [signUpData, setSignUp] = useState(
    JSON.parse(window.localStorage.getItem("newToken")) || false
  );

  if (signUpData) {
    if (
      token.login == signUpData.newLogin &&
      token.password == signUpData.newPassword
    ) {
      return <Auth />;
    } else {
      return <UnAuth setToken={setToken} setSignUp={setSignUp} />;
    }
  } else {
    if (token.login == "Saidislom" && token.password == "5055") {
      return <Auth />;
    } else {
      return <UnAuth setToken={setToken} setSignUp={setSignUp} />;
    }
  }
}

export default App;
