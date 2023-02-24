import { useEffect, useState } from 'react';

const pathname = window.location.pathname;

function usePath() {
  // use this solution instead of react-router-dom(useLocation)
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    setPath(pathname);
  }, []);

  return { path };
}

export default usePath;
