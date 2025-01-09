import { Box, Image } from '@chakra-ui/react';

interface FullWidthImageProps {
  src: string;
  alt: string;
  yOffset?: string;
}

export function FullWidthImage({
  src,
  alt,
  yOffset = 'center',
}: FullWidthImageProps) {
  return (
    <Box width='100%' overflow='hidden' position='relative'>
      <Image
        src={src}
        alt={alt}
        width='100%'
        height={{ base: '165px', md: '300px' }}
        objectFit='cover'
        objectPosition={`center ${yOffset}`}
        display='block'
      />
    </Box>
  );
}
