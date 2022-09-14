import React, { useState } from 'react';
import Input from '../../components/ui/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/user');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <img
        className="absolute pointer-events-none left-0 top-0 w-full h-full z-0 object-cover"
        src="https://images.hdqwalls.com/download/macos-monterey-dusk-5k-u2-3840x2160.jpg"
        alt=""
      />
      <div className="absolute w-full h-full bg-black/50 left-0 top-0"></div>
      <div className="min-w-[400px] w-[600px] absolute top-1/2 -translate-y-1/2 text-white">
        <div className="h-full relative z-10">
          <div className="text-inherit font-medium  mb-5">
            <h1 className="text-3xl">Welcome back</h1>
            <span className="text-sm">Please enter your details</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" action="">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              title="Email"
              placeholder="Enter your email"
              type="email"
              require
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              title="Password"
              placeholder="• • • • • • • • • • • •"
              type="password"
              require
            />
            <div className="text-sm flex justify-between items-center">
              <label className="flex items-center">
                <input className="mr-2 bg-inherit rounded-lg" type="checkbox" />
                <span>Remember for 30 days</span>
              </label>
              <Link
                className="decoration-dashed decoration-black decoration-1"
                to="/restore-password"
              >
                Forgot password
              </Link>
            </div>
            <button className="p-2 rounded-lg text-md w-full bg-slate-700 text-white flex items-center justify-center">
              Sign In
            </button>
            <Link
              className="text-sm text-left decoration-dashed decoration-blue-900 text-blue-900"
              to="/signup"
            >
              Create new account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
