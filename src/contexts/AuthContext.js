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
    getAccessToken() ? true : null
  );

  //?
  // useEffect(() => {
  //   const fetchAuthUser = async () => {
  //     try {
  //       const res = await authApi.getMe();
  //       setAuthenticatedUser(res.data.user);
  //       // console.log(res.data.user);
  //     } catch (err) {
  //       // removeAccessToken();
  //     }
  //   };
  //   if (getAccessToken()) {
  //     fetchAuthUser();
  //   }
  // }, []);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        // console.log('ressssssssssss', res.data.user);
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
    // ได้มาเป็น payload
  };

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

  const updateProfile = async (data) => {
    const res = await userApi.updateProfilePicture(data);
    // res.data =  {"profilePicture": "https://res.cloudinary.com/dhgny94kc/image/upload/v1675919318/1675915242378428504823.jpg"}
    setAuthenticatedUser({
      ...authenticatedUser,
      ...res.data
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
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
