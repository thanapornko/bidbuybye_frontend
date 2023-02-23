import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decoded from 'jwt-decode';

export default function Login() {
  const { login, authenticatedUser, googleLogin } = useAuth();
  // move to context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
      console.log('-------------email-----', email);
      console.log('-------------password-----', password);
      toast.success('Welcome');
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleCallbackResponse = async (response) => {
    // console.log('Encoded JWT ID token: ' + response.credential);
    // let userObject = jwt_decoded(response.credential);
    // let email = userObject.email;
    // let fname = userObject.given_name;
    // let lname = userObject.family_name;
    // console.log('---------userobj', email, fname, lname);
    await googleLogin({ token: response.credential });
  };

  useEffect(() => {
    /* google global */
    window.google?.accounts.id.initialize({
      client_id:
        '290963822259-c9u4ha9lb9d2s45h1macv2m6kdk7u2t9.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    window.google?.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        type: 'standard'
      }
    );
  }, []);

  return (
    <div className="flex justify-center my-16">
      {/* ///////////// */}
      <div className="w-1/3 bg-white rounded-md shadow-md">
        <div className="px-6 py-8 space-y-4">
          <div className="w-full bg-gray-200 rounded-md p-1 flex justify-between">
            <Link
              to="/register"
              className="w-1/2 text-center text-sm rounded-md p-1 hover:bg-white"
            >
              Signup
            </Link>
            <div className="w-1/2 text-center text-sm rounded-md p-1 bg-white">
              Login
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 font-display mt-8"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2.5 bg-white border-b text-gray-900 focus:outline-none focus:border-b-black"
                placeholder="Email Address"
              />
              {/* <div className="text-red-500 text-sm pt-1">error</div> */}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-bold text-gray-900 relative"
              >
                Password
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="form-input block w-full p-2.5 bg-white border-b text-gray-900 focus:outline-none focus:border-b-black"
                />
                <button className="fa-solid fa-eye pr-1 absolute right-5 bottom-3" />
                {/* <i class="fa-solid fa-eye-slash"/> */}
              </label>
              {/* <div className="text-red-500 text-sm pt-1">error</div> */}
            </div>
            <div className="flex justify-end">
              <a className="text-sm" href="#">
                Forget password?
              </a>
            </div>
            <div>
              <button
                onClick={handleSubmitForm}
                className="w-full text-white bg-black hover:bg-gray-600 rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-gray-500 text-center my-2">Or</p>
              <div id="signInDiv"></div>
              {/* <button className="w-full text-gray-600 bg-white border border-gray-300 hover:border-gray-700 rounded-lg text-sm px-5 py-2.5 text-center">
                <i className="fa-brands fa-google pr-1"></i> Continue with
                Google
              </button> */}
            </div>
          </form>
        </div>
      </div>
      {/* ////////////// */}
    </div>
  );
}
