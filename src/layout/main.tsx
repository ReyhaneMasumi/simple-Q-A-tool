import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

import type { LazyExoticComponent } from 'react';

const Details = lazy(() => import('../view/details'));
const Questions = lazy(() => import('../view/questions'));

const viewComponent: Record<string, LazyExoticComponent<() => JSX.Element>> = {
  '/': Questions,
  '/details': Details,
};

const pathname = window.location.pathname;

function Main() {
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    setPath(pathname);
  }, []);

  const View = useMemo(() => viewComponent[path], [path]);

  return (
    <main className="sticky top-16 w-full h-main px-14 py-4 bg-backgroundColor overflow-auto">
      <Suspense>
        <View />
      </Suspense>
    </main>
  );
}

export default Main;
