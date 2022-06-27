import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { UserAuth } from 'src/firebase/Context/auth.context';
import Loading from 'src/components/Loading';

function AuthCheck({ children }) {
  const { user, loading } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading && router.pathname === '/') {
      router.replace('/dashboard');
    }
  }, [loading]);
}

if (user && !loading && router.pathname !== '/') {
  return children;
} else if (!user && !loading) {
  router.push('/login');
} else {
  return <Loading />;
}
export default AuthCheck;
