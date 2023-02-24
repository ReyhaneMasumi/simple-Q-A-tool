/* Input Component */

import { forwardRef, memo } from 'react';

import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Variants = 'primary';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: Variants;
}

const variantStyle: { [key in Variants]: string } = {
  primary: 'bg-white border-Gray/Light',
};

function Input({ variant = 'primary', ...props }: IProps, ref: any) {
  return (
    <input
      {...props}
      ref={ref}
      // Default styles are re-written by custom styles
      className={[
        'py-2 px-5 rounded-md black-normal-14',
        variantStyle[variant],
        props.className,
      ].join('')}
    />
  );
}

export default memo(forwardRef(Input));
