import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ContainerComponentProps = {
  children: ReactNode;
  className?: string;
};

export function ContainerComponent({
  children,
  className,
}: ContainerComponentProps) {
  return (
    <Container maxW='container.lg' py={5} className={className}>
      {children}
    </Container>
  );
}
