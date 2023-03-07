import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import * as authApi from '../apis/auth-api';
import * as userApi from '../apis/user-api';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? jwtDecode(getAccessToken()) : null
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        console.log('#1', res.data.user);
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          console.log('unauthorized please login.');
        } else if (err.response && err.response.status === 404) {
          console.log('user not found');
        } else {
          console.log('fetch err');
        }
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({
      email,
      password
    });
    console.log('reslogin', res);
    setAccessToken(res.data.accessToken);

    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };
  // console.log('#2', jwtDecode(getAccessToken()));

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const googleLogin = async (credential) => {
    console.log('------------------cre', credential);
    const res = await authApi.googleLogin(credential);
    console.log(res.data.accessToken);
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  // const updateProfile = async (data) => {
  //   const res = await userApi.updateProfilePicture(data);
  //   setAuthenticatedUser({
  //     ...authenticatedUser,
  //     ...res.data
  //   });
  // };

  const updateProfile = async (data) => {
    try {
      const res = await userApi.updateProfilePicture(data);
      const updatedUser = {
        ...authenticatedUser,
        profilePicture: res.data.profilePicture
      };
      setAuthenticatedUser(updatedUser);
      return res.data.profilePicture;
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        setAuthenticatedUser,
        login,
        logout,
        googleLogin,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
