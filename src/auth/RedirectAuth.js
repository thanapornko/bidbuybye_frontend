import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useProduct from '../hooks/useProduct';

export default function RedirectAuth({ children }) {
  const { authenticatedUser } = useAuth();
  const { product } = useProduct();

  // if (!authenticatedUser || !product) {
  //   return <Navigate to={'/'} />;
  // }

  if (authenticatedUser.isAdmin === true) {
    return <Navigate to={'/admin'} />;
  }

  return children;
}
