import 'flowbite';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import validateRegister from '../validate/validate-register';
import useAuth from '../hooks/useAuth';
import * as authApi from '../apis/auth-api';
import ModalTerms from '../components/ModalTerms';

const initialInput = {
  email: '',
  password: ''
};

export default function Register() {
  const { googleLogin } = useAuth();
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // show & hide password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // show modal terms&conditions
  const [show, setShow] = useState(false);

  // activate & disable button if tick agree terms and conditions
  const [agreed, setAgreed] = useState(false);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // console.log('-------------input-----------', input);
      const result = validateRegister(input);
      // console.log('----------result', result);
      // console.dir('-------------error----------', error);
      if (result) {
        setError(result);
      } else {
        // console.log('no error');
        setError({});
        await authApi.register(input);
        setInput(initialInput);
        // console.log('innit', initialInput);
        toast.success('register successfully');
        navigate('/login');
      }
    } catch (err) {
      console.dir('errdir----------', err);
      toast.error(err.response?.data.message);
    }
  };

  const handleCallbackResponse = async (response) => {
    try {
      await googleLogin({ token: response.credential });
      toast.success('Welcome');
      navigate('/');
    } catch (err) {
      console.dir('errdir----------', err);
      toast.error(err.response?.data.message);
    }
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
        type: 'standard',
        width: '320px'
      }
    );
  }, []);

  return (
    <div className="flex justify-center my-16">
      {/* ///////////// */}
      <ModalTerms show={show} setShow={setShow} />
      <div className="w-1/4 bg-white rounded-md shadow-md">
        <div className="px-6 py-8 space-y-4">
          <div className="w-full bg-gray-200 rounded-md p-1 flex justify-between">
            <div className="w-1/2 text-center text-sm rounded-md p-1 bg-white">
              Signup
            </div>
            <Link
              to="/login"
              className="w-1/2 text-center text-sm rounded-md p-1 hover:bg-white"
            >
              Login
            </Link>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 mt-8"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                value={input?.email}
                onChange={handleChangeInput}
                className="block w-full p-2.5 bg-white border-b text-gray-900 focus:outline-none focus:border-b-black"
                placeholder="Email Address"
              />
              <div className="text-red-500 text-sm pt-1">{error?.email}</div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-bold text-gray-900 relative"
              >
                Password
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleChangeInput}
                  className="form-input block w-full p-2.5 bg-white border-b text-gray-900 focus:outline-none focus:border-b-black"
                />
                <button
                  className={`fa-solid ${
                    showPassword ? 'fa-eye-slash' : 'fa-eye'
                  } pr-1 absolute right-5 bottom-3`}
                  onClick={toggleShowPassword}
                />
              </label>

              <div className="text-red-500 text-sm pt-1">{error.password}</div>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                className="mr-2"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              ></input>

              <p className="text-sm mr-1">I've read and agree to</p>
              <button
                className="text-sm font-bold underline"
                type="button"
                data-modal-target="medium-modal"
                data-modal-toggle="medium-modal"
                onClick={() => setShow(true)}
              >
                Terms & Conitions
              </button>
            </div>
            <div className="grid justify-items-center">
              <button
                onClick={handleSubmitForm}
                className={`w-80 text-white ${
                  agreed ? 'bg-black' : 'bg-gray-600'
                } rounded-lg text-sm px-5 py-2.5 text-center`}
                disabled={!agreed}
              >
                Signup
              </button>
              <p className="text-gray-500 text-center my-2">Or</p>
              <div id="signInDiv"></div>
            </div>
          </form>
        </div>
      </div>
      {show && (
        <div className="fixed z-40 w-screen h-screen inset-0 bg-zinc-800 bg-opacity-20"></div>
      )}
      {/* ////////////// */}
    </div>
  );
}
