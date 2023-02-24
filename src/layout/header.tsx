import { useEffect, useState } from 'react';

import Button from '../components/button';
import Modal from '../components/modal';

import { ReactComponent as ProfileImg } from '../assets/images/profile-img.svg';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg';
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg';

function Header() {
  const [isModalOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(
      '🚀 ~ file: header.tsx:16 ~ Header ~ isModalOpen:',
      isModalOpen
    );
  }, [isModalOpen]);
  return (
    <header className="flex-between-center sticky top-0 w-full h-16 px-14 py-4 bg-white overflow-hidden z-10 shadow-header">
      <div className="title">سوالات</div>
      <div className="flex-between-center gap-10">
        <Button onClick={setIsOpen.bind(null, true)}>
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
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isModalOpen}
      >
        <div>hi</div>
      </Modal>
    </header>
  );
}

export default Header;
