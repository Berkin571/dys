import './title.scss';
import { Heading } from '@chakra-ui/react';

type TitleProps = {
  label: string;
  className?: string;
};

export function Title({ label, className }: TitleProps) {
  return (
    <Heading as='h2' size={'xl'} mb={6} className={`heading-h2 ${className}`}>
      {label}
    </Heading>
  );
}
