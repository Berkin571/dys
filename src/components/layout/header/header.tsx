import { useState, ReactNode } from 'react';
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
import logo from '../../../assets/image.png';
import { AdditionalMenu } from './utils';

type LinkType = {
  name: string;
  url: string;
  children?: ReactNode;
};

const Links: LinkType[] = [
  { name: 'Über EKP Corporations', url: '/about-us' },
  {
    name: 'Vorratsgesellschaften',
    url: '/vorratsgesellschaften',
    children: <AdditionalMenu />,
  },
  { name: 'Kaufprozess', url: '/kaufprozess' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Kontakt', url: '/contact' },
];

type NavLinkType = {
  children: ReactNode;
  url: string;
  isDropdown?: boolean;
  dropdownContent?: ReactNode;
};

const NavLink = ({
  children,
  url,
  isDropdown,
  dropdownContent,
}: NavLinkType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position='relative'
      onMouseEnter={() => isDropdown && setIsHovered(true)}
      onMouseLeave={() => isDropdown && setIsHovered(false)}
    >
      <Link
        px={2}
        py={1}
        rounded='md'
        _hover={{
          textDecoration: 'none',
          bg: 'gray.200',
        }}
        href={url}
      >
        {children}
      </Link>
      {isDropdown && isHovered && (
        <Box
          position='absolute'
          top='100%'
          left={0}
          bg='white'
          boxShadow='md'
          p={2}
          rounded='md'
          zIndex={10}
          mt={0.5}
        >
          {dropdownContent}
        </Box>
      )}
    </Box>
  );
};

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
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            backgroundColor='var(--primary)'
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems='center'>
            <Box
              display={{ base: 'none', md: 'block' }}
              onClick={handleLogoClick}
              cursor='pointer'
            >
              <img
                src={ekpCorporationsLogo}
                alt='Logo von EKP Corporations'
                className='ekpCorporationsLogo'
              />
            </Box>
            <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(link => (
                <NavLink
                  key={link.name}
                  url={link.url}
                  isDropdown={link.name === 'Vorratsgesellschaften'}
                  dropdownContent={link.children}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <Button
              as={Link}
              href='#'
              bg='var(--primary)'
              color='var(--primary-white)'
              _hover={{
                bg: 'var(--primary-hover)',
              }}
              onClick={handleNavigation}
            >
              Vorratsgesellschaft reservieren
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
              <Stack as='nav' spacing={4}>
                {Links.map(link => (
                  <Box key={link.name}>
                    <NavLink url={link.url}>{link.name}</NavLink>
                    {isMobile && link.name === 'Vorratsgesellschaften' && (
                      <Stack pl={3} spacing={1}>
                        <Link
                          href='/vorratsgesellschaften'
                          px={2}
                          py={1}
                          mt={4}
                          rounded='md'
                          _hover={{
                            bg: 'gray.200',
                          }}
                          _before={{
                            content: '"•"',
                            marginRight: '8px',
                            color: 'black',
                          }}
                        >
                          Unsere Leistungsversprechen
                        </Link>
                        <Link
                          href='/gmbh'
                          px={2}
                          py={1}
                          rounded='md'
                          _hover={{
                            bg: 'gray.200',
                          }}
                          _before={{
                            content: '"•"',
                            marginRight: '8px',
                            color: 'black',
                          }}
                        >
                          GmbH
                        </Link>
                        <Link
                          href='/ug'
                          px={2}
                          py={1}
                          rounded='md'
                          _hover={{
                            bg: 'gray.200',
                          }}
                          _before={{
                            content: '"•"',
                            marginRight: '8px',
                            color: 'black',
                          }}
                        >
                          UG (haftungsbeschränkt)
                        </Link>
                      </Stack>
                    )}
                  </Box>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
