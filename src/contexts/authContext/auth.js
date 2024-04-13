import { auth } from "../../firebase";
import { useContext } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, updatePassword, sendEmailVerification} from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email,password)=>{
    return createUserWithEmailAndPassword(auth ,email,password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({errorCode:errorMessage})
      });
}

export const doSignInWithEmailAndPassword = async (email,password)=>{
    return signInWithEmailAndPassword(auth ,email,password).then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({errorCode:errorMessage})
      });
}

export const doSigninWithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth ,provider);
    // user.name   to retrive user data
    return result;
}

export const doSignOut = async ()=>{
    return auth.signOut();
}

// export const doPasswordChange = async ()=>{
//     return updatePassword(auth.currentUser , password);
// }

// export const doSendEmailverification = async ()=>{
//     return sendEmailVerification(auth.currentUser ,{
//         url : `${window.location.origin}/home`,
//     });
// }
