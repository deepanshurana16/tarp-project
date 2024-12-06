import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'
import Lottie from 'react-lottie'
import signupanim from '../../../Assets/signupanim.json' // Replace with the path to your Lottie JSON file
import Navbarforlogin from '../../Navbarforlogin'

const Register = () => {

    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password).catch((error) => {
                setErrorMessage(error.message)
                setIsRegistering(false)
            })
        }
    }

    // Lottie animation options
    const lottieOptions = {
        loop: true,
        autoplay: true, 
        animationData: signupanim, // The Lottie animation data
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='h-screen flex flex-col'>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            {/* Navbar */}
            <Navbarforlogin />

            {/* Main Content */}
            <main className="w-full h-full flex self-center place-content-center place-items-center mt-16">
                <div className="w-full flex h-full">

                    {/* Left side for Lottie animation */}
                    <div className="w-1/2 flex justify-center items-center">
                        <Lottie options={lottieOptions} height={300} width={300} />
                    </div>

                    {/* Right side for the registration form */}
                    <div className="w-1/2 flex justify-center items-center p-4">
                        <div className="w-96 h-[500px] flex flex-col justify-between text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                            <div className="text-center">
                                <div className="mt-2">
                                    <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                                </div>
                            </div>
                            <form onSubmit={onSubmit} className="flex flex-col space-y-5 flex-grow">
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
                                        autoComplete='new-password'
                                        required
                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600 font-bold">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete='off'
                                        required
                                        value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                    />
                                </div>

                                {errorMessage && (
                                    <span className='text-red-600 font-bold'>{errorMessage}</span>
                                )}

                                <button
                                    type="submit"
                                    disabled={isRegistering}
                                    className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                                >
                                    {isRegistering ? 'Signing Up...' : 'Sign Up'}
                                </button>

                                <div className="text-center text-sm">Already have an account? <Link to={'/login'} className="hover:underline font-bold">Log in</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register
