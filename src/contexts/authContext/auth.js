import { auth } from "../../firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, updatePassword, sendEmailVerification} from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email,password,username)=>{
    return createUserWithEmailAndPassword(auth ,email,password).then((userCredential) => {
        const user = userCredential.user;
          fetch("http://localhost:5000/user/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email    : email,
              password : password,
              username : username,
              uniqueID : user.uid
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              console.log("data :", data);
            })
            .catch((error) => {
              console.error(
                "A problem Occured while Svaing Data to the database",
                error
              );
            }).uid;
      })
      .catch((error) => {
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
