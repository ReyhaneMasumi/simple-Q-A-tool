/**
 * adopted from: https://dev.to/link2twenty/react-using-portals-to-make-a-modal-2kdf
 */

import { useEffect, useRef, useState } from 'react';
import Portal from './portal';

interface IModalProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
  locked?: boolean;
  wrap?: boolean;
}

export default function Modal({
  children,
  open,
  onClose,
  locked,
}: IModalProps) {
  const [active, setActive] = useState(false);
  const backdrop = useRef(null);

  useEffect(() => {
    const { current }: { current: HTMLElement | null } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e: KeyboardEvent) =>
      !locked && e.key === 'Escape' && onClose();

    const clickHandler = (e: MouseEvent) =>
      !locked && e.target === current && onClose();

    if (current) {
      (current as HTMLElement)?.addEventListener(
        'transitionend',
        transitionEnd
      );
      (current as HTMLElement)?.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        (document.activeElement as HTMLElement)?.blur();
        setActive(open);
        document.querySelector('#root')?.setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      if (current) {
        (current as HTMLElement)?.removeEventListener(
          'transitionend',
          transitionEnd
        );
        (current as HTMLElement)?.removeEventListener('click', clickHandler);
      }

      document.querySelector('#root')?.removeAttribute('inert');
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal>
          <div
            ref={backdrop}
            className={
              'flex items-center justify-center fixed inset-0 z-50 bg-[#00000060] backdrop-blur-xs opacity-0 transition-all delay-200 ' +
              (active && open ? 'duration-200 delay-[0] opacity-100' : '')
            }
          >
            <div
              className={
                'w-2/5 relative rounded-lg overflow-hidden scale-90 transition-all opacity-0 ' +
                (active && open
                  ? 'scale-100 duration-300 delay-100 opacity-100'
                  : '')
              }
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
