import React, { useState } from 'react';
import Input from '../../components/ui/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import LoginBg from '../../assets/images/bg-login.jpg';

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
    <div className="flex items-center justify-center text-black w-full">
      {/* <img className="absolute w-full h-full z-0 object-cover opacity-40" src={LoginBg} alt="" /> */}
      <div className="w-1/2 h-full relative z-10">
        <div className="text-black font-medium  mb-5">
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
      <div className="w-1/2 h-full"></div>
    </div>
  );
};
export default Login;
