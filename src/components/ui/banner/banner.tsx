import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type BannerProps = {
  children: ReactNode;
  className?: string;
};

export function Banner({ children, className }: BannerProps) {
  return <Box className={`image-container ${className}`}>{children}</Box>;
}
