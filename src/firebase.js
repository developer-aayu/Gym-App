import {initializeApp}  from "firebase/app";
// import 'dotenv/config';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    databaseUrl : import.meta.env.VITE_DATABASE_URL,
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSENGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASURMENT_ID
};
let app ,auth;
try {
    app =  initializeApp(firebaseConfig);
    auth = getAuth(app);    
} catch (error) {
    console.log(error);
}

export {app, auth};