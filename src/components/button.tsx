import { memo } from 'react';

import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type Variants = 'primary' | 'secondary' | 'cancel';

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
};

function Button({ variant = 'primary', ...props }: IProps) {
  return (
    <button
      {...props}
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
