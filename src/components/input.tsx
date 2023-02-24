import { memo } from 'react';

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

function Input({ variant = 'primary', ...props }: IProps) {
  return (
    <input
      {...props}
      className={[
        'py-2 px-5 rounded-md black-normal-14',
        variantStyle[variant],
        props.className,
      ].join('')}
    />
  );
}

export default memo(Input);
