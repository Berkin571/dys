import { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  IconButton,
  Link,
  HStack,
  useDisclosure,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Links = [
  { name: 'Über CorpFactory', url: '/about-us' },
  { name: 'Voratsgesellschaften', url: '/vortragsgesellschaften' },
  { name: 'Ablauf', url: '/ablauf' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Kontakt', url: '/contact' },
];

type NavLinkType = {
  children: React.ReactNode;
  url: string;
};

const NavLink = ({ children, url }: NavLinkType) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    href={url}
  >
    {children}
  </Link>
);

export function Header() {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const handleLogoClick = () => {
    navigate('/');
    onClose();
  };

  return (
    <>
      <Box
        bg={scroll ? 'gray.100' : 'transparent'}
        px={4}
        position='sticky'
        top={0}
        zIndex={1}
        boxShadow={scroll ? 'sm' : 'none'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontSize='xl' fontWeight='bold'>
                CorpFactory
              </Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link.name} url={link.url}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              as={Link}
              href='#'
              bg={'brand.500'}
              color={'white'}
              _hover={{
                bg: 'brand.600',
              }}
            >
              Online Reservieren
            </Button>
          </Flex>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size='xs'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader onClick={handleLogoClick}>CorpFactory</DrawerHeader>
            <DrawerCloseButton sx={{ marginTop: 2, marginRight: 2 }} />
            <DrawerBody>
              <Stack as={'nav'} spacing={4}>
                {Links.map(link => (
                  <NavLink key={link.name} url={link.url}>
                    {link.name}
                  </NavLink>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
