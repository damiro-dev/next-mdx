import NextImage, { ImageProps } from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Counter from './counter';

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  Counter,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
