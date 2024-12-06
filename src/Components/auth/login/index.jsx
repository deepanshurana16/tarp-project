import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'
import { toast } from 'react-toastify'
import Lottie from 'react-lottie'
import animationData from '../../../Assets/loginanim.json'  // Replace with the path to your Lottie JSON file
import Navbarforlogin from '../../Navbarforlogin'

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        try{
            if(!isSigningIn) {
                setIsSigningIn(true)
                await doSignInWithEmailAndPassword(email, password)
                // doSendEmailVerification()
            }
        }
        catch(e){
            toast.error("Wrong credentials");
            setIsSigningIn(false);
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    // Lottie animation options
    const lottieOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData, // The Lottie animation data
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="h-screen flex flex-col">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            {/* Navbar */}
            <Navbarforlogin />

            {/* Main Content */}
            <main className="w-full h-full flex self-center place-content-center place-items-center mt-16">
                <div className="w-full flex h-full">

                    {/* Left side for Lottie animation */}
                    <div className="w-1/2 flex justify-center items-center">
                        <Lottie options={lottieOptions} height={400} width={400} />
                    </div>

                    {/* Right side for the login form */}
                    <div className="w-1/2 flex justify-center items-center p-4">
                        <div className="w-96 h-[340px] flex flex-col justify-between text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl"> 
                            <div className="text-center">
                                <div className="mt-2">
                                    <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
                                </div>
                            </div>
                            <form
                                onSubmit={onSubmit}
                                className="flex flex-col space-y-5 flex-grow"
                            >
                                <div>
                                    <label className="text-sm text-gray-600 font-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        autoComplete='email'
                                        required
                                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600 font-bold">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete='current-password'
                                        required
                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                    />
                                </div>

                                {errorMessage && (
                                    <span className='text-red-600 font-bold'>{errorMessage}</span>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSigningIn}
                                    className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300 '}`}
                                >
                                    {isSigningIn ? 'Signing In...' : 'Sign In'}
                                </button>
                            </form>
                            <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Login
