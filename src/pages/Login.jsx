import { useActionState, useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.js'

const Login = () => {
    const formRef = useRef()
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const loginUser = (prevState, formData) => {
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()

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

        if (email != '' && password != '') {
            console.log("iam in sign in block")
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    setErrorMessage('')
                    const user = userCredential.user;
                    navigate("/")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode == 'auth/invalid-credential') {
                        setErrorMessage('Invalid credentials!')
                    }
                });
        }
    }

    const [state, formAction, isPending] = useActionState(loginUser, { success: false, error: null })
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`min-h-dvh flex items-center justify-center ${theme == "light" ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-50'}`}>
            <div className={`w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-slate-950'}`}>
                <div className={`p-6 space-y-4 md:space-y-6 sm:p-8`}>
                    <h1 className={`text-xl font-bold leading-tight tracking-tight md:text-2xl`}>
                        Sign in to your account
                    </h1>
                    <form ref={formRef} className={`space-y-4 md:space-y-6" action="#`} action={formAction}>
                        <div>
                            <label htmlFor="email" className={`block mb-2 text-sm font-medium`}>Your email</label>
                            <input type="email" name="email" id="email" className={`rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'} ${(errorMessage || isEmailEmpty) ? 'outline outline-red-600' : null}`} placeholder="name@domain.com" />
                            {
                                isEmailEmpty ? <p className="mt-1.5 text-medium text-sm text-red-600">Email can't be empty!</p> : null
                            }
                            {
                                errorMessage ? <p className="mt-1.5 text-medium text-sm text-red-600">{errorMessage}</p> : null
                            }
                        </div>
                        <div>
                            <label htmlFor="password" className={`block mb-2 text-sm font-medium`}>Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className={`rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'} ${(errorMessage || isPasswordEmpty) ? 'outline outline-red-600' : null}`} />
                            {
                                isPasswordEmpty ? <p className="mt-1.5 text-medium text-sm text-red-600">Password can't be empty!</p> : null
                            }
                            {
                                errorMessage ? <p className="mt-1.5 text-medium text-sm text-red-600">{errorMessage}</p> : null
                            }
                        </div>
                        <div className={`flex items-center justify-between`}>
                            <div className={`flex items-start`}>
                                <div className={`flex items-center h-5`}>
                                    <input id="remember" aria-describedby="remember" type="checkbox" className={`w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium`} />
                                </div>
                                <div className={`ml-3 text-sm`}>
                                    <label htmlFor="remember" className={``}>Remember me</label>
                                </div>
                            </div>
                            <a href="#" className={`text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600`}>Forgot password?</a>
                        </div>
                        <button type="submit" className={`w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 active:scale-95 bg-sky-600 text-white`} disabled={isPending}>{isPending ? 'Signing in...' : 'Sign in'}</button>
                        <p className={`text-sm font-light`}>
                            Don’t have an account yet? <Link to="/signup" className={`font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600`}>Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login