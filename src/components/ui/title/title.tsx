import './title.scss';
import { Heading } from '@chakra-ui/react';

type TitleProps = {
  label: string;
  className?: string;
  size?: string;
};

export function Title({ label, className, size = 'xl' }: TitleProps) {
  return (
    <Heading as='h2' size={size} mb={6} className={`heading-h2 ${className}`}>
      {label}
    </Heading>
  );
}
