import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { authSuccess } from '../../store/auth';
import Sign from "../../assets/Sign.svg"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        { email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      if (response.data) {
        const { user, token } = response.data;

        dispatch(authSuccess({
          user,
          token,
        }));

        // Store the token in localStorage
        localStorage.setItem('token', token);

        setEmail("");
        setPassword("");
        setError("");
        navigateTo("/");
      }
    } catch (error) {
      setError('Error logging user: ' + error.message);
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
        <h1 className="text-3xl">Login To Exclusiive</h1>
        <h4 className='mt-4 text-xl'>Enter Your Details below</h4>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className='mt-10'>
          <form onSubmit={handleLogin}>
            <div className='flex flex-col gap-5'>
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
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
