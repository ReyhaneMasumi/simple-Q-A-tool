/* Button Component */

import { memo } from 'react';

import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type Variants = 'primary' | 'secondary' | 'cancel' | 'success' | 'error';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variants;
}

const variantStyle: { [key in Variants]: string } = {
  primary: 'bg-primary text-white',
  secondary: 'border border-primary text-primary',
  cancel: 'text-primary',
  success:
    'bg-transparent text-Annotations/Success border border-Secondary/VeryVeryLight',
  error:
    'bg-transparent text-Annotations/Error border border-Secondary/VeryVeryLight',
};

function Button({ variant = 'primary', ...props }: IProps) {
  return (
    <button
      {...props}
      // Default styles are re-written by custom styles
      className={[
        'w-fit py-2 px-5 rounded-md font-bold text-xs',
        variantStyle[variant],
        props.className,
      ].join(' ')}
    >
      {props.children}
    </button>
  );
}

export default memo(Button);
