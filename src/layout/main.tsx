// This Component is responsible for loading the proper views such as questios or details

import { lazy, Suspense, useContext, useMemo } from 'react';

import { Context } from '../context';

import { ReactComponent as LoadingIcon } from '../assets/images/loading.svg';

import type { LazyExoticComponent } from 'react';

const Details = lazy(() => import('../view/details'));
const Questions = lazy(() => import('../view/questions'));

const viewComponent: Record<string, LazyExoticComponent<() => JSX.Element>> = {
  Home: Questions,
  Details: Details,
};

function Main() {
  const { page } = useContext(Context);

  // To selecting a suitable view depending on the page which is selected
  const View = useMemo(() => viewComponent[page ?? 'Home'], [page]);

  return (
    <main className="sticky top-16 w-full h-main px-14 py-4 bg-backgroundColor overflow-auto">
      <Suspense fallback={<LoadingIcon />}>
        <View />
      </Suspense>
    </main>
  );
}

export default Main;
