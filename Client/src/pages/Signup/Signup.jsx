import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Sign from "../../assets/Sign.svg";
import google from "../../assets/google.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        { name, email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      setName("");
      setEmail("");
      setPassword("");
      setError("");
      navigateTo("/");
    } catch (error) {
      setError('Error registering user: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-10 flex'>
      <div>
        <img className='w-9/12 h-4/5 pr-0' src={Sign} alt="Sign" />
      </div>
      <div className='mt-0'>
        <h1 className="text-3xl">Create an account or Login</h1>
        <h4 className='mt-4 text-xl'>Enter Your Details below</h4>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className='mt-10'>
          <form onSubmit={handleRegister}>
            <div className='flex flex-col gap-5'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Name'
                className="rounded-sm border-b-2 border-gray-300 focus:border-blue-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Your Email'
                className="rounded-sm border-b-2 focus:border-blue-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Your Password'
                className="rounded-sm border-b-2 focus:border-blue-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
              <button
                type='submit'
                className="flex justify-center w-full items-center gap-2 px-7 py-4 border text-lg leading-none bg-red-500 text-white rounded-md mt-5"
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create an account'}
              </button>
              <button type='button' className='w-full px-5 py-4 border rounded-sm'>
                <img src={google} alt="Google" />
              </button>
              <div className='flex justify-center'>
                <p>Already have an account?</p>
                <Link to="/login" className='underline decoration-solid'>
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
