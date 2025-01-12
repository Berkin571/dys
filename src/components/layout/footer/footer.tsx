import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import './footer.scss';

export function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = 'var(--primary)';

  return (
    <Box bg={bg} color={color} py={10}>
      <Container
        as={Stack}
        maxW='6xl'
        py={3}
        spacing={4}
        justify='center'
        align='center'
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={6}
          className='link-container'
        >
          <Link href='/about-us'>EKP Corporations</Link>
          <Link href='/vorratsgesellschaften'>Vorratsgesellschaften</Link>
          <Link href='/kaufprozess'>Kaufprozess</Link>
          <Link href='/faq'>FAQ</Link>
          <Link href='/contact'>Kontakt</Link>
          <Link href='/impressum'>Impressum</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW='6xl'
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2025 EKP Corporations. Alle Rechte vorbehalten.</Text>
          <Stack direction='row' spacing={6}>
            <IconButton
              as='a'
              href='#'
              aria-label='LinkedIn'
              icon={<FaLinkedin />}
              bg={accentColor}
              color='white'
              _hover={{ bg: 'var(--primary-hover)' }}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='Instagram'
              icon={<FaInstagram />}
              bg={accentColor}
              color='white'
              _hover={{ bg: 'var(--primary-hover)' }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
