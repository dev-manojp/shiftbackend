import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth();

window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  "recaptcha-container",
  {}
);

const appVerifier = window.recaptchaVerifier;

signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    window.confirmationResult = confirmationResult;

    console.log("OTP Sent");
  })
  .catch((error) => {
    console.log(error);
  });