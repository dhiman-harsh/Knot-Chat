import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"
import { Link } from "react-router-dom"

const Signup = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`min-h-dvh flex items-center justify-center ${theme == "light" ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-50'}`}>
            <div className={`w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-slate-950'}`}>
                <div className={`p-6 space-y-4 md:space-y-6 sm:p-8`}>
                    <h1 className={`text-xl font-bold leading-tight tracking-tight md:text-2xl`}>
                        Create an account
                    </h1>
                    <form className={`space-y-4 md:space-y-6" action="#`}>
                        <div>
                            <label htmlFor="email" className={`block mb-2 text-sm font-medium`}>Your email</label>
                            <input type="email" name="email" id="email" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'}`} placeholder="name@domain.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className={`block mb-2 text-sm font-medium`}>Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'}`} required="" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className={`block mb-2 text-sm font-medium`}>Confirm password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className={`text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'}`} required="" />
                        </div>
                        <div className={`flex items-start`}>
                            <div className={`flex items-center h-5`}>
                                <input id="terms" aria-describedby="terms" type="checkbox" className={`w-4 h-4 rounded focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 border ${theme == "light" ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'}`} required="" />
                            </div>
                            <div className={`ml-3 text-sm`}>
                                <label htmlFor="terms" className={`font-light`}>I accept the <a className={`font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600`} href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className={`w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-sky-600 text-white active:scale-95`}>Create an account</button>
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