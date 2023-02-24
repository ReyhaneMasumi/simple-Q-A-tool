// This component is a layout management to prevent using repetitive component such as header

import Header from './header';
import Main from './main';

function Layout() {
  return (
    <div dir="rtl" className="relative">
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
