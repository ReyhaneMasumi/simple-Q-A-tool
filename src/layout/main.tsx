import { lazy, Suspense, useMemo } from 'react';

import usePath from '../hooks/usePath';

import { ReactComponent as LoadingIcon } from '../assets/images/loading.svg';

import type { LazyExoticComponent } from 'react';

const Details = lazy(() => import('../view/details'));
const Questions = lazy(() => import('../view/questions'));

const viewComponent: Record<string, LazyExoticComponent<() => JSX.Element>> = {
  '/': Questions,
  '/details': Details,
};

function Main() {
  const { path } = usePath();

  const View = useMemo(() => viewComponent[path], [path]);

  return (
    <main className="sticky top-16 w-full h-main px-14 py-4 bg-backgroundColor overflow-auto">
      <Suspense fallback={<LoadingIcon />}>
        <View />
      </Suspense>
    </main>
  );
}

export default Main;
