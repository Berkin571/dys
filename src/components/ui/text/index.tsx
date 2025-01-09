import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TextComponentProps {
  children: ReactNode;
  mb?: number | string;
  fontSize?: string;
  marginRight?: boolean;
}

export function TextComponent({
  children,
  mb = 8,
  fontSize = 'lg',
  marginRight = false,
}: TextComponentProps) {
  return (
    <Text
      mb={mb}
      fontSize={fontSize}
      textAlign={{ base: 'left', md: 'justify' }}
      mr={marginRight ? '1.5rem' : ''}
    >
      {children}
    </Text>
  );
}
