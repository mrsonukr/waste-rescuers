import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // If URL has trailing slash and it's not the root path, redirect to non-trailing slash version
    if (pathname !== '/' && pathname.endsWith('/')) {
      const newPath = pathname.slice(0, -1);
      navigate(newPath + search + hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;