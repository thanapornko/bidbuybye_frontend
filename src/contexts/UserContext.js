import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  const handleChangeFname = async (e) => {
    setFname(e.target.value);
  };
  const handleChangeLname = async (e) => {
    setLname(e.target.value);
  };
  const handleChangeBirthdate = async (e) => {
    setBirthdate(e.target.value);
  };
  const handleChangeEmail = async (e) => {
    setEmail(e.target.value);
  };
  const handleChangeAddress = async (e) => {
    setAddress(e.target.value);
  };
  const handleChangeMobile = async (e) => {
    setMobile(e.target.value);
  };

  return (
    <UserContext.Provider
      value={{
        fname,
        setFname,
        lname,
        setLname,
        birthdate,
        setBirthdate,
        email,
        setEmail,
        address,
        setAddress,
        mobile,
        setMobile,
        handleChangeFname,
        handleChangeLname,
        handleChangeBirthdate,
        handleChangeEmail,
        handleChangeAddress,
        handleChangeMobile
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
