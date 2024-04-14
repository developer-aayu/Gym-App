import React, { useState , useContext, createContext} from 'react';
import { doSignInWithEmailAndPassword ,doSigninWithGoogle ,doCreateUserWithEmailAndPassword  } from '../../contexts/authContext/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaMobile } from "react-icons/fa";

const SignUp = ({location="/home"}) => {
    const navigate = useNavigate();
    const [mode, setMode] = useState('signup');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission based on the mode (signup or login)
        if(mode === "signup"){
            await doCreateUserWithEmailAndPassword(formData.email , formData.password , formData.username).then(()=>{
                alert("You have been Succesfully Logged in")
            }).catch((err)=>{
                console.log(err)
            });
        }
        else{
            try {
                const result = await doSignInWithEmailAndPassword(formData.email, formData.password) 
            } catch (error) {
                console.error('Error signing in:', error);
            }
            // navigate(location);
            window.location.reload();
        }
    };
    const gopogleSignin = async (e)=>{
        e.preventDefault;
        await doSigninWithGoogle().catch(err =>{
            console.log(err);
        });
        // navigate(location);
        window.location.reload();

    }
    return (
            <div className="p-8 bg-gray-100 rounded-lg shadow-md" style={{width: "300px", height: "auto"}}>
                <h2 className="text-xl font-semibold mb-4">{mode === 'signup' ? 'Sign Up' : 'Login'}</h2>
                <form >
                    {mode === 'signup' && (
                        <div className="mb-4">
                            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="w-full border rounded-md p-2" />
                        </div>
                    )}
                    <div className="mb-4">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border rounded-md p-2" />
                    </div>
                    <div className="mb-4">
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full border rounded-md p-2" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mb-4" onClick={handleSubmit}>
                        {mode === 'signup' ? 'Sign Up' : 'Login'}
                    </button>
                </form>
                <div>
                    {mode === 'signup' ? 'Already have an account? ' : 'Don\'t have an account? '}
                    <button className="text-blue-500" type='submit'  onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}>
                        {mode === 'signup' ? 'Login' : 'Sign Up'}
                    </button>
                </div>
                {mode === 'signup' && (
                    <div className="mt-4 flex flex-col justify-center items-center gap-3">
                        <button className="shadow-lg text-white py-3 rounded-md mr-2 flex items-center justify-center text-2xl" onClick={gopogleSignin} style={{width: "250px"}}><FcGoogle /></button>
                        <button className="shadow-lg py-3 rounded-md mr-2 flex items-center justify-center text-2xl" style={{width: "250px"}}><FaMobile /> <span className='text-sm'>Phone number</span></button>
                    </div>
                )}
            </div>
    );
};

export default SignUp;
