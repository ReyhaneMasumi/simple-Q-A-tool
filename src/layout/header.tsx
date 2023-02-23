import Button from '../components/button';

import { ReactComponent as ProfileImg } from '../assets/images/profile-img.svg';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg';
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg';

function Header() {
  return (
    <header className="flex-between-center sticky top-0 w-full h-16 px-14 py-4 bg-white overflow-hidden z-10 shadow-header">
      <div className="title">سوالات</div>
      <div className="flex-between-center gap-10">
        <Button>
          <div className="flex-between-center gap-3.5">
            <PlusIcon />
            <span>سوال جدید</span>
          </div>
        </Button>
        <div className="flex-between-center gap-3.5 text-Gray/Darker font-bold text-sm">
          <ProfileImg />
          <div>الناز شاکردوست</div>
          <ArrowIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
