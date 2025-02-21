import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignIn = () => {

    const {LogIn} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        LogIn(email, password)
        .then(result=>{
          console.log(result.user);
          const lastSignInTime = result.user.metadata.lastSignInTime;
          console.log(lastSignInTime);
          const user = {
            email,
            lastSignInTime,
          }
          fetch('https://coffee-store-server-virid-nine.vercel.app/users', {
              method: "PATCH",
              headers: {
                  "Content-Type" : "application/json"
              },
              body: JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              e.target.reset();
            })
          })
        .catch(error=>console.log(error.code))
    }

    return (
    <div className="hero bg-base-200 min-h-[85vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;