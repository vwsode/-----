import React, { useState } from 'react';
import Input from '../../components/ui/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const SignUp = () => {
  const { createUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate('/user');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center text-black w-full">
      <div className="w-1/2 h-full">
        <div className="text-black font-medium  mb-5">
          <h1 className="text-3xl">Welcome</h1>
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
            <Link className="decoration-dashed decoration-black decoration-1" to="/login">
              Already have an account?
            </Link>
          </div>
          <button className="p-2 rounded-lg text-md w-full bg-slate-700 text-white flex items-center justify-center">
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
};
export default SignUp;
