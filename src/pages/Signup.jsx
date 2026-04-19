import { useActionState, useContext, useRef, useState } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from '../firebase.js'
import { setDoc, doc } from 'firebase/firestore'

const Signup = () => {
    const passRef = useRef()
    const confirmPassRef = useRef()
    const [isNameEmpty, setIsNameEmpty] = useState(false)
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isMailProviderSupported, setIsMailProviderSupported] = useState(true)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
    const [isPasswordShort, setIsPasswordShort] = useState(false)
    const [isPasswordMatch, setIsPasswordMatch] = useState(true)
    const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false)
    const navigate = useNavigate()

    const matchPassword = () => {
        if (passRef.current.value == confirmPassRef.current.value) {
            setIsPasswordMatch(true)
        } else {
            setIsPasswordMatch(false)
        }
    }

    const createAccount = async (prevState, formData) => {
        const name = formData.get('name').trim()
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        const confirmPassword = formData.get('confirm-password').trim()
        console.log("email:", email)
        console.log("password:", password)

        if (name == '') {
            setIsNameEmpty(true)
        } else {
            setIsNameEmpty(false)
        }

        if (email == '') {
            setIsEmailEmpty(true)
        } else {
            setIsEmailEmpty(false)
        }

        if (password == '') {
            setIsPasswordEmpty(true)
        } else {
            setIsPasswordEmpty(false)
        }

        if (confirmPassword == '') {
            setIsConfirmPasswordEmpty(true)
        } else {
            setIsConfirmPasswordEmpty(false)
        }

        if (password.length <= 6) {
            setIsPasswordShort(true)
        } else {
            setIsPasswordShort(false)
        }

        if (email != '' && password != '') {
            const mailProvider = email.split("@")[1].split(".")[0]
            if (mailProvider == 'gmail' || mailProvider == 'outlook' || mailProvider == 'hotmail') {
                setIsMailProviderSupported(true)

                try {
                    let res = await createUserWithEmailAndPassword(auth, email, password)
                        await updateProfile(res.user, {
                            displayName: name
                        })

                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: name,
                            email
                        })

                        try {
                            await setDoc(doc(db, "userChats", res.user.uid), {})
                        }
                        catch(error) {
                            console.log(error)
                        }
                    console.log(res.user)
                    setIsSignUpSuccess(true)
                    navigate("/")
                }
                catch (error) {
                    console.log(error)
                    console.error(error)
                    if (error.code == 'auth/network-request-failed') {
                        setErrorMessage('Network issue! Try again later.')
                    }
                    else if (error.code == 'auth/email-already-in-use') {
                        setErrorMessage('Email already in use!')
                    } else {
                        setErrorMessage('')
                    }
                }

                // createUserWithEmailAndPassword(auth, email, password)
                //     .then((userCredential) => {
                //         setIsSignUpSuccess(true)
                //         const user = userCredential.user
                //     })
                //     .then(() => {
                //         updateProfile(user, {
                //             displayName: name
                //         })
                //             .then(() => {
                //                 console.log("Profile Updated Successfully")
                //             })
                //             .catch((error) => {
                //                 console.log(error.code)
                //                 console.log(error.message)
                //             })
                //     })
                //     .then(() => {
                //         setDoc(doc(db, "users", user.uid), {
                //             userId: user.uid,
                //             displayName,
                //             email,
                //         })
                //             .then(() => {
                //                 console.log("User info saved in db")
                //             })
                //             .catch((error) => {
                //                 console.log(error.code)
                //                 console.log(error.message)
                //             })
                //     })
                //     .catch((error) => {
                //         const errorCode = error.code;
                //         const errorMessage = error.message;
                //         console.log("error code:", errorCode)
                //         console.log("error message:", errorMessage)
                //         if (error.code == 'auth/network-request-failed') {
                //             setErrorMessage('Network issue! Try again later.')
                //         }
                //         else if (error.code = 'auth/email-already-in-use') {
                //             setErrorMessage('Email already in use!')
                //         } else {
                //             setErrorMessage('')
                //         }
                //     });
            } else {
                setIsMailProviderSupported(false)
            }
        }
    }

    const [state, formAction, isPending] = useActionState(createAccount)

    const { theme } = useContext(ThemeContext)
    return (
        <div className={`min-h-dvh flex items-center justify-center ${theme == "light" ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-50'}`}>
            <div className={`w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-slate-950'}`}>
                <div className={`p-6 space-y-4 md:space-y-6 sm:p-8`}>
                    <h1 className={`text-xl font-bold leading-tight tracking-tight md:text-2xl`}>
                        Create an account
                    </h1>
                    {
                        errorMessage ? <p className="mt-1 text-medium text-sm text-red-600">{errorMessage}</p> : null
                    }
                    {
                        isSignUpSuccess ? <p className="my-1 text-medium text-sm text-green-600 bg-green-300 border border-green-600 rounded-md p-2">Signed up successfully!</p> : null
                    }
                    <form className={`space-y-4 md:space-y-6" action="#`} action={formAction}>
                        <div>
                            <label htmlFor="name" className={`block mb-2 text-sm font-medium`}>Your name</label>
                            <input type="text" name="name" id="name" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'} ${(isNameEmpty) ? 'outline outline-red-600' : null}`} placeholder="Full Name" />
                            {/* {
                                !isMailProviderSupported ? <p className="mt-1.5 text-medium text-sm text-red-600">This email provider is not supported! Try with another email.</p> : null
                            } */}
                            {
                                isNameEmpty ? <p className="mt-1.5 text-medium text-sm text-red-600">Name can't be empty!</p> : null
                            }
                        </div>
                        <div>
                            <label htmlFor="email" className={`block mb-2 text-sm font-medium`}>Your email</label>
                            <input type="email" name="email" id="email" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'} ${(isEmailEmpty || !isMailProviderSupported) ? 'outline outline-red-600' : null}`} placeholder="name@domain.com" />
                            {
                                !isMailProviderSupported ? <p className="mt-1.5 text-medium text-sm text-red-600">This email provider is not supported! Try with another email.</p> : null
                            }
                            {
                                isEmailEmpty ? <p className="mt-1.5 text-medium text-sm text-red-600">Email can't be empty!</p> : null
                            }
                        </div>
                        <div>
                            <label htmlFor="password" className={`block mb-2 text-sm font-medium`}>Password</label>
                            <input ref={passRef} type="password" name="password" id="password" placeholder="••••••••" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'} ${(isPasswordEmpty) ? 'outline outline-red-600' : null}`} />
                            {
                                isPasswordEmpty ? <p className="mt-1.5 text-medium text-sm text-red-600">Password can't be empty!</p> : null
                            }
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className={`block mb-2 text-sm font-medium`}>Confirm password</label>
                            <input onChange={matchPassword} ref={confirmPassRef} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'} ${(isConfirmPasswordEmpty) ? 'outline outline-red-600' : null}`} />
                            {
                                isConfirmPasswordEmpty ? <p className="mt-1.5 text-medium text-sm text-red-600">Password can't be empty!</p> : null
                            }
                            {
                                !isPasswordMatch ? <p className="mt-1.5 text-medium text-sm text-red-600">Confirm password must match with password!</p> : null
                            }
                        </div>
                        <div className={`flex items-start`}>
                            <div className={`flex items-center h-5`}>
                                <input id="terms" aria-describedby="terms" type="checkbox" className={`w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium`} />
                            </div>
                            <div className={`ml-3 text-sm`}>
                                <label htmlFor="terms" className={`font-light`}>I accept the <a className={`font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600`} href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className={`w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-sky-600 text-white active:scale-95`} disabled={isPending}>{isPending ? 'Creating account...' : 'Create an account'}</button>
                        <p className={`text-sm font-light`}>
                            Already have an account? <Link to="/login" className={`font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600`}>Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup