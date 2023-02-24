/* Textarea Component */

import { forwardRef, memo } from 'react';

import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type Variants = 'primary';

interface IProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  variant?: Variants;
}

const variantStyle: { [key in Variants]: string } = {
  primary: 'bg-white border-Gray/Light',
};

function Textarea({ variant = 'primary', ...props }: IProps, ref: any) {
  return (
    <textarea
      {...props}
      ref={ref}
      // Default styles are re-written by custom styles
      className={[
        'py-2 px-5 min-h-[200px] rounded-md black-normal-14',
        variantStyle[variant],
        props.className,
      ].join('')}
    />
  );
}

export default memo(forwardRef(Textarea));
