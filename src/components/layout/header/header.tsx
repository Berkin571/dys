import { useState } from 'react';
import {
  Box,
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
  useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../../assets/logo_schmal_2.png';

const Links = [
  { name: 'Über EKP Corporations', url: '/about-us' },
  { name: 'Vorratsgesellschaften', url: '/vorratsgesellschaften' },
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
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const ekpCorporationsLogo = logo;

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

  const handleNavigation = () => {
    navigate('/contact');
  };

  return (
    <>
      <Box
        bg={scroll ? 'white' : 'transparent'}
        className={
          !isMobile ? 'header-container' : !scroll ? 'mobile-header' : ''
        }
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
              <img
                src={ekpCorporationsLogo}
                alt='Logo von EKP Corporations'
                className={'ekpCorporationsLogo'}
              />
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
              bg={'blue.700'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleNavigation}
            >
              Vorratsgesellschaft anfragen
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
            <DrawerHeader onClick={handleLogoClick}>
              EKP Corporations
            </DrawerHeader>
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
