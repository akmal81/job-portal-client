import Lottie from "lottie-react";
import signInAni from '../../assets/lotti/login.json'
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";



const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { user, signInUser, googleSignInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const fromWhere = location?.state || '/'


    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((userCredential) => {
                navigate(fromWhere);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    const handleGoogleSignIn = () =>{
        googleSignInUser()
        .then((result) =>{
            navigate(fromWhere);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

    return (
        <section className='w-8/12 lg:flex mx-auto gap-10 mt-40'>
            <div className='flex-1 flex flex-col items-center justify-center shadow-xl border py-20'>
            <button onClick={handleGoogleSignIn} className='border py-2 px-6 bg-slate-100 font-bold'>Google</button>
                <form onSubmit={handleSignIn} className='flex flex-col gap-8 w-2/3 mt-6'>
                    <h2 className='text-xl font-semibold text-center'>Login with Email</h2>
                    
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder='Email'
                            className='border py-4 px-4 w-full' />
                    </div>

                    <div className="relative">
                        <input
                            type={
                                showPassword? 'text':'password'
                            }
                            name="password"
                            placeholder='Password'
                            className='border py-4 px-4 w-full'
                            required />
                        <button onClick={(e)=>{e.preventDefault(); setShowPassword(!showPassword)}} className="absolute right-4 top-1/3">
                            {
                                !showPassword ? <p>Show</p> : <p>Hide</p>
                            }
                        </button>

                    </div>

                    <input
                        type="submit"
                        className='py-3 px-4 bg-primary w-fit text-white font-medium rounded-lg' />
                </form>
               
            </div>
            <div className='flex-1'>
                <div className='flex-1'>
                    <Lottie animationData={signInAni}></Lottie>
                </div>
            </div>
        </section>
    );
};

export default SignIn;