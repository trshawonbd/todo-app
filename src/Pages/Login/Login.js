import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
/* import useToken from '../../Hooks/useToken'; */

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let navigate = useNavigate();
      let location = useLocation();
    
      let from = location.state?.from?.pathname || "/";
      /* const [token] = useToken(user || gUser); */

      useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }

      },[user, gUser,from, navigate])

      if (loading || gLoading){
          return <Loading></Loading>
      }

      let SignInErrorMessage;

      if(error || gError){
        SignInErrorMessage = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }



    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required:{
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                      message: 'Provide a valid email'
                                    }
                                  })}
                                />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required:{
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                      value: 6,
                                      message: 'Must have 6 Characters or long'
                                    }
                                  })}
                                />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {SignInErrorMessage}
                        <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p><small>New to doctors portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;