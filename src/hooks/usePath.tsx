import { useEffect, useState } from 'react';

const pathname = window.location.pathname;

function usePath() {
  // use this solution in case of react-router-dom
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    setPath(pathname);
  }, []);

  return { path };
}

export default usePath;
