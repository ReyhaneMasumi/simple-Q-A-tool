import { useContext, useMemo, useState } from 'react';

import NewQuestion from '../view/new-question';

import Button from '../components/button';
import Modal from '../components/modal';

import { Context } from '../context';

import { ReactComponent as ProfileImg } from '../assets/images/profile-img.svg';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg';
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg';

const headTitle: Record<string, string> = {
  Home: 'لیست سوالات',
  Details: 'جزئیات سوال',
};

function Header() {
  const { page, setPage } = useContext(Context);

  // state to control modal
  const [isModalOpen, setIsOpen] = useState(false);

  // To selecting a suitable title depending on the page which is selected
  const title = useMemo(() => headTitle[page ?? 'Home'], [page]);

  return (
    <header className="flex-between-center sticky top-0 w-full h-16 px-14 py-4 bg-white overflow-hidden z-10 shadow-header">
      <div
        className="title cursor-pointer"
        onClick={setPage?.bind(null, 'Home')}
      >
        {/* Title depends on page */}
        {title}
      </div>
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

      {/* Add new question modal */}
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isModalOpen}
      >
        {/* Content of Modal is fully customizable */}
        <NewQuestion
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </Modal>
    </header>
  );
}

export default Header;
