import React, { useState } from "react";
import { provider, popUp } from "../firebase/config";

import { firebase } from "@firebase/app";
import "@firebase/auth";
import googleLogo from "../Images/glogo.png";

const EnterName = (props) => {
  if (!props.userName) {
    return (
      <div className="enter-name-cont">
        <h1>Sign in with google to send messages!</h1>
        <div
          className="sign-in-butt"
          onClick={() => {
            firebase
              .auth()
              .signInWithPopup(provider)
              .then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                props.setUserName(user.displayName);
                // ...
              })
              .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
          }}
        >
          <img src={googleLogo} alt="google logo"></img>
          <p>Sign In With Google</p>
        </div>
      </div>
    );
  }
  return null;
};

export default EnterName;
