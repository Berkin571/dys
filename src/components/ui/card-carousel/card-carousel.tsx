import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  useColorModeValue,
  HStack,
  Center,
  Button,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  price: string;
  description: string;
}

interface CardCarouselProps {
  cards: CardProps[];
}

export function CardCarousel({ cards }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null); // Reset touchEnd
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const touchDifference = touchStart - touchEnd;

    if (touchDifference > 50) {
      const newIndex = Math.min(currentIndex + 1, cards.length - 1);
      handleDotClick(newIndex);
    }

    if (touchDifference < -50) {
      const newIndex = Math.max(currentIndex - 1, 0);
      handleDotClick(newIndex);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const cardWidth = scrollWidth / cards.length;

    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left:
          index === 0
            ? 0
            : index === cards.length - 1
              ? scrollWidth
              : cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const updateCurrentIndex = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / cards.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', updateCurrentIndex);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', updateCurrentIndex);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = 'var(--primary)';

  const handleNavigation = () => {
    navigate('/contact');
  };

  return (
    <Box bg={bg} color={color} p={4} borderRadius='md' boxShadow='lg'>
      <VStack spacing={4} align='stretch'>
        <Box
          display={{ base: 'flex', md: 'grid' }}
          gridTemplateColumns={{ base: 'none', md: '1fr 1fr' }}
          gap={4}
          overflowX={{ base: 'auto', md: 'visible' }}
          ref={scrollRef}
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              border='1px solid'
              borderColor={accentColor}
              borderRadius='md'
              boxShadow='md'
              flex={isMobile ? '0 0 100%' : '1'}
              maxWidth={isMobile ? '100%' : 'none'}
              width={isMobile ? '100%' : 'auto'}
              as={motion.div}
              whileHover={{ boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.2)' }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: '0.3' }}
            >
              <CardHeader>
                <Heading size='md' color={accentColor}>
                  {card.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text dangerouslySetInnerHTML={{ __html: card.price }}></Text>
                <Divider my={2} />
                <Text>{card.description}</Text>
              </CardBody>
              <CardFooter>
                {isMobile ? (
                  <VStack spacing={4} width='100%'>
                    <Button
                      width='100%'
                      backgroundColor={accentColor}
                      onClick={handleNavigation}
                      _hover={{
                        backgroundColor: 'var(--primary-hover)',
                        transform: 'scale(1.01)',
                      }}
                    >
                      Jetzt anfragen
                    </Button>
                    <Button
                      width='100%'
                      variant='outline'
                      border='1px solid var(--primary)'
                      color={accentColor}
                      onClick={() => navigate(`/${card.title}`)}
                      _hover={{
                        border: '1px solid var(--primary-hover)',
                        transform: 'scale(1.01)',
                      }}
                    >
                      Zur {card.title}
                    </Button>
                  </VStack>
                ) : (
                  <HStack spacing={4}>
                    <Button
                      backgroundColor={accentColor}
                      onClick={handleNavigation}
                      _hover={{
                        backgroundColor: 'var(--primary-hover)',
                        transform: 'scale(1.01)',
                      }}
                    >
                      Jetzt anfragen
                    </Button>
                    <Button
                      variant='outline'
                      border='1px solid var(--primary)'
                      color={accentColor}
                      onClick={() => navigate(`/${card.title}`)}
                      _hover={{
                        border: '1px solid var(--primary-hover)',
                        transform: 'scale(1.01)',
                      }}
                    >
                      Zur {card.title}
                    </Button>
                  </HStack>
                )}
              </CardFooter>
            </Card>
          ))}
        </Box>

        <Center mt={4} display={{ base: 'flex', md: 'none' }}>
          <HStack spacing={2}>
            {cards.map((_, index) => (
              <Box
                key={index}
                w={3}
                h={3}
                bg={index === currentIndex ? accentColor : 'gray.400'}
                borderRadius='full'
                onClick={() => handleDotClick(index)}
                cursor='pointer'
                as={motion.div}
                whileTap={{ scale: 1.2 }}
              />
            ))}
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
}
