import { memo } from 'react';

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

function Textarea({ variant = 'primary', ...props }: IProps) {
  return (
    <textarea
      {...props}
      className={[
        'py-2 px-5 min-h-[200px] rounded-md black-normal-14',
        variantStyle[variant],
        props.className,
      ].join('')}
    />
  );
}

export default memo(Textarea);
