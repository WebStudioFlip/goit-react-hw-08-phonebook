import { Outlet } from 'react-router-dom';

import Header from '../Header';

const LayoutPage = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default LayoutPage;