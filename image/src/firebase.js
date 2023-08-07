import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCxl4ccx3Ul4TbgphLFhmorOppobeCGW2E",
    authDomain: "image-274bc.firebaseapp.com",
    projectId: "image-274bc",
    storageBucket: "image-274bc.appspot.com",
    messagingSenderId: "195947250013",
    appId: "1:195947250013:web:11ad5246b12604f31668b4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);