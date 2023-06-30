import { AppMenu } from './AppMenu/AppMenu';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default lazy(() =>
  import('./Layout').then(module => ({
    default: module.Cast,
  }))
);
